using MvcApplication10.Helpers;
using MvcApplication10.Models;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Collections.Specialized;
using System.Configuration;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace MvcApplication10.Controllers
{
    public class PocketController : Controller
    {
        //
        // GET: /Pocket/

        protected PocketModel Pocket
        {
            get
            {
                PocketModel result = null;

                SessionManager sm = new SessionManager();

                object pocketModel = sm.Get("pocketModel");
                if (pocketModel != null)
                {
                    result = pocketModel as PocketModel;
                }
                else
                {
                    string SourceUrl = ConfigurationManager.AppSettings["PocketSource"];
                    if (!String.IsNullOrEmpty(SourceUrl) && Uri.IsWellFormedUriString(SourceUrl, UriKind.Absolute))
                    {
                        string ServerFolderPath = Server.MapPath("/");
                        string AllPocketsFolderPath = ConfigurationManager.AppSettings["PocketPath"];
                        if (!String.IsNullOrEmpty(AllPocketsFolderPath))
                        {
                            AllPocketsFolderPath = ServerFolderPath + AllPocketsFolderPath;
                        }
                        string ServerDomainName = Request.Url.Authority;
                        string messagefrom = ConfigurationManager.AppSettings["DefaultMessageFrom"];
                        string messageto = ConfigurationManager.AppSettings["DefaultMessageTo"];
                        result = new PocketModel(SourceUrl, AllPocketsFolderPath, ServerDomainName, ServerFolderPath, messagefrom, messageto);

                        sm.Set("pocketModel", result);
                    }
                }

                return result;
            }
        }

        protected Dictionary<string, string> SharedControls
        {
            get 
            {
                 Dictionary<string, string> result = new  Dictionary<string, string>();

                SessionManager sm = new SessionManager();

                object sharedControls = sm.Get("sharedControls");
                if (sharedControls != null)
                {
                    result = sharedControls as Dictionary<string, string>;
                }
                else
                {
                    string RelativeControlsPath = "/Views/Shared/Controls/";
                    string ControlsPath = Server.MapPath("/") + RelativeControlsPath;
                    string[] Files = Directory.GetFiles(ControlsPath);
                    foreach (var File in Files)
                    {
                        string ControlName = Path.GetFileName(File);
                        result.Add(ControlName, "~" + RelativeControlsPath + ControlName);
                    }
                    sm.Set("sharedControls", result);
                }

                return result;
            }
        }

        private string RenderRazorViewToString(string viewName, object model)
        {
            ViewData.Model = model;
            using (var sw = new StringWriter())
            {
                var viewResult = ViewEngines.Engines.FindPartialView(ControllerContext, viewName);
                var viewContext = new ViewContext(ControllerContext, viewResult.View, ViewData, TempData, sw);
                viewResult.View.Render(viewContext, sw);
                viewResult.ViewEngine.ReleaseView(ControllerContext, viewResult.View);
                return sw.GetStringBuilder().ToString();
            }
        }

        [AcceptVerbs(HttpVerbs.Get)]
        public ActionResult Index()
        {

            if (String.IsNullOrWhiteSpace(Pocket.UserLogin))
            {
                if (Request.Path.ToLower().Contains("/finance") || Request.Path.ToLower().Contains("/account/cabinet"))
                {
                    return Redirect("/Account/Login");
                }
            }
            
            var NameValueCollection = HttpUtility.ParseQueryString(Request.QueryString.ToString());
            foreach (string _key in NameValueCollection.AllKeys) {
                if (_key.Contains("utm_") || _key.Contains("_openstat") || _key.Contains("yclid") || _key.Contains("spush"))
                {
                    NameValueCollection.Remove(_key);            
                }
            }
            string RequestQueryString = (NameValueCollection.Count > 0) ? "?" + NameValueCollection.ToString() : "";
            string RequestPath = String.Format("{0}{1}", Request.Url.AbsolutePath, RequestQueryString);

            string ContentType = MimeMapping.GetMimeMapping(Request.Path).ToLower();
            if ((ContentType == "application/octet-stream"
                    || ContentType == "text/html")
                &&
                ((Request.AcceptTypes.Length == 1 && Request.AcceptTypes[0] == "*/*")
                        || Request.AcceptTypes.Any(r => r.ToLower() == "text/html")
                        || Request.AcceptTypes.Any(r => r.ToLower() == "text/plain")
                        || Request.AcceptTypes.Any(r => r.ToLower() == "application/xhtml+xml")
                        || Request.AcceptTypes.Any(r => r.ToLower() == "application/xml")))
            {
                if (Pocket == null)
                {
                    return Content(String.Format("Invalid pocket"));
                }
                else
                {
                    string content = Pocket.GetContent(RequestPath, false);

                    foreach (var ControlName in SharedControls)
                    {
                        if (content.Contains("@" + ControlName.Key))
                        {
                            string template = RenderRazorViewToString(ControlName.Value, Pocket);
                            content = content.Replace("@" + ControlName.Key, template);
                        }
                    }

                    if (String.IsNullOrWhiteSpace(Pocket.UserLogin))
                    {
                        content = content.Replace("href=\"/Account/Cabinet\"", "href=\"/Account/Login\"");
                        content = content.Replace("href=\"/Finance\"", "href=\"/Account/Login\"");
                    }
                    else
                    {
                        content = content.Replace("href=\"/Account/Register\">Регистрация</a>", "href=\"/Account/Logout\">Выйти</a>");
                    }

                    return Content(content);
                }
            }
            else if (ContentType == "application/javascript" || ContentType == "text/css" || Request.AcceptTypes.Any(r => r.ToLower() == "text/css"))
            {
                string content = "";
                if (Pocket != null)
                {
                    content = Pocket.GetContent(RequestPath, true);
                }
                return new FileContentResult(Encoding.UTF8.GetBytes(content), ContentType);
            }
            else
            {
                Stream Stream = new MemoryStream();
                if (Pocket != null)
                {
                    Stream = Pocket.GetSourceFileStream(RequestPath);
                }
                return new FileStreamResult(Stream, ContentType);
            }
        }

        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult Index(FormCollection collection)
        {
            JsonMessage jm = new JsonMessage();

            if (collection["notification_type"] != null)
            {
                string body = "";
                string[] AllKeys = ((System.Collections.Specialized.NameValueCollection)(collection)).AllKeys;
                foreach (var key in AllKeys)
                {
                    body += key + ": " + collection[key] + System.Environment.NewLine;
                }
                System.IO.File.AppendAllText(Server.MapPath("/log.log"), body);

                if (collection["email"] != null)
                {
                    string UserName = collection["email"];
                    string UserPath = Server.MapPath("/Users/" + UserName);
                    if (Directory.Exists(UserPath))
                    {
                        var BalanceSearchPattern = new System.Text.RegularExpressions.Regex(@"$(?<=\.(balance))", System.Text.RegularExpressions.RegexOptions.IgnoreCase);
                        var balancefilenames = Directory.GetFiles(UserPath).Where(f => BalanceSearchPattern.IsMatch(f)).OrderBy(f => f);
                        if (balancefilenames.Count() > 0)
                        {
                            var balancefilename = balancefilenames.First();
                            string pathtobalance = Path.GetDirectoryName(balancefilename) + "\\";
                            decimal sum = decimal.Parse(Path.GetFileNameWithoutExtension(balancefilename), CultureInfo.InvariantCulture);
                            sum += decimal.Parse(collection["amount"], CultureInfo.InvariantCulture);
                            string newfilename = pathtobalance + sum.ToString(CultureInfo.InvariantCulture) + ".balance";
                            System.IO.File.Move(balancefilename, newfilename);
                            System.IO.File.AppendAllText(newfilename, "\r\n\r\n" + DateTime.Now.ToString("dd.MM.yyyy HH:mm") + "\r\n" + body);
                        }
                    }
                }
                return Json(jm);
            }

            if (String.IsNullOrEmpty(collection["2fea14ff-d8e3-42c1-a230-3917b7a640c9"]))
            {
                jm.Result = false;
                jm.Message = "Невозможно отправить данные - не обнаружен ключ формы";
            }
            else if (String.IsNullOrEmpty(Pocket.MessageFrom))
            {
                jm.Result = true;
                jm.Message = "Невозможно отправить данные - не настроен сервер отправки";
            }
            else if (String.IsNullOrEmpty(Pocket.MessageFrom))
            {
                jm.Result = true;
                jm.Message = "Невозможно отправить данные - не задан получатель";
            }
            else
            {
                try
                {
                    if (collection["from URL"].ToLower().Contains("/account/register"))
                    {
                        string RegisterResult = RegisterNew(collection);
                        if (String.IsNullOrWhiteSpace(Pocket.UserLogin))
                        {
                            jm.Result = true;
                            jm.Message = RegisterResult;
                        }
                        else
                        {
                            jm.Result = true;
                            jm.Object = "/Account/Cabinet";
                        }
                    }
                    else if (collection["from URL"].ToLower().Contains("/account/login"))
                    {
                        string RegisterResult = Login(collection);
                        if (String.IsNullOrWhiteSpace(Pocket.UserLogin))
                        {
                            jm.Result = true;
                            jm.Message = RegisterResult;
                        }
                        else
                        {
                            jm.Result = true;
                            jm.Object = "/";
                        }
                    }
                    else if (collection["from URL"].ToLower().Contains("/account/logout"))
                    {
                        Pocket.UserLogin = "";
                        Pocket.UserEmail = "";
                        Pocket.UserBalance = "";
                        jm.Result = true;
                        jm.Object = "/";
                    }
                    else if (collection["from URL"].ToLower().Contains("/order/create"))
                    {
                        if (String.IsNullOrWhiteSpace(Pocket.UserLogin))
                        {
                            jm.Result = true;
                            jm.Object = "/Account/Login";
                        }
                        else
                        {
                            OrderCreate(collection);
                            jm.Result = true;
                            jm.Object = "/Account/Cabinet";
                        }
                    }
                    else if (collection["ChangeOrderState"] != null)
                    {
                        string ChangeResult = ChangeState(collection["UserLogin"], collection["Date"], collection["State"]);
                        jm.Result = true;
                        jm.Message = ChangeResult;
                    }
                    else
                    {
                        string subject = "Notification " + Pocket.ServerDomainName;
                        string body = "";
                        Collection<Attachment> attachments = new Collection<Attachment>();

                        string[] AllKeys = ((System.Collections.Specialized.NameValueCollection)(collection)).AllKeys;
                        foreach (var key in AllKeys)
                        {
                            body += key + ": " + collection[key] + System.Environment.NewLine;
                        }

                        foreach (string OneFile in Request.Files)
                        {
                            HttpPostedFileBase hpf = Request.Files[OneFile] as HttpPostedFileBase;
                            if (hpf.ContentLength > 0)
                            {
                                Attachment attachment = new Attachment(hpf.InputStream, hpf.FileName);
                                attachments.Add(attachment);
                            }
                        }

                        MailMessage mailObj = new MailMessage();
                        mailObj.From = new MailAddress(Pocket.MessageFrom);
                        mailObj.To.Add(Pocket.MessageTo);
                        mailObj.Subject = subject;
                        mailObj.Body = body;
                        foreach (var attachment in attachments)
                        {
                            mailObj.Attachments.Add(attachment);
                        }

                        SmtpClient SMTPServer = new SmtpClient("localhost");
                        SMTPServer.Send(mailObj);

                        jm.Result = true;
                        jm.Message = "Данные отправлены, благодарим за сотрудничество...";
                    }
                }
                catch (Exception e)
                {
                    jm.Result = true;
                    jm.Message = "Во время отправки произошла ошибка - " + e.ToString();
                }
            }

            return Json(jm);
        }

        public string RegisterNew(FormCollection collection)
        {
            string UserName = collection["UserName"];
            char[] charInvalidFileChars = Path.GetInvalidFileNameChars(); 
            foreach (char charInvalid in charInvalidFileChars)
            {
                UserName = UserName.Replace(charInvalid, ' ');
            }

            string UserPath = Server.MapPath("/Users/" + UserName);
            if (Directory.Exists(UserPath)) {
                return "Логин занят";
            }

            DirectoryInfo UserDirectoryInfo = Directory.CreateDirectory(UserPath);
            System.IO.File.AppendAllText(UserPath + "/" + UserName + ".txt", collection["Email"]);
            System.IO.File.AppendAllText(UserPath + "/" + collection["Password"].GetHashCode() + ".hash","");
            System.IO.File.AppendAllText(UserPath + "/0.00.balance", "");
            Directory.CreateDirectory(UserPath + "/Orders");

            Pocket.UserLogin = UserName;

            return "Пользователь добавлен";
        }

        public string Login(FormCollection collection)
        {
            string UserName = collection["UserName"];
            char[] charInvalidFileChars = Path.GetInvalidFileNameChars();
            foreach (char charInvalid in charInvalidFileChars)
            {
                UserName = UserName.Replace(charInvalid, ' ');
            }

            string UserPath = Server.MapPath("/Users/" + UserName);
            if (!Directory.Exists(UserPath))
            {
                return "Пользователь с таким логином не найден";
            }

            if (!System.IO.File.Exists(UserPath + "/" + collection["Password"].GetHashCode() + ".hash"))
            {
                return "Неверный пароль";
            }
            
            Pocket.UserLogin = UserName;
            Pocket.UserEmail = UserName;
            Pocket.UserBalance = "0.00";
            var BalanceSearchPattern = new System.Text.RegularExpressions.Regex(@"$(?<=\.(balance))", System.Text.RegularExpressions.RegexOptions.IgnoreCase);
            var balancefilenames = Directory.GetFiles(UserPath).Where(f => BalanceSearchPattern.IsMatch(f)).OrderBy(f => f);
            if (balancefilenames.Count() > 0)
            {
                var balancefilename = balancefilenames.First();
                Pocket.UserBalance = Path.GetFileNameWithoutExtension(balancefilename);
            }

            return "Пользователь авторизован";
        }

        public string OrderCreate(FormCollection collection)
        {
            
            string UserPath = Server.MapPath("/Users/" + Pocket.UserLogin + "/Orders");

            DirectoryInfo di = Directory.CreateDirectory(UserPath + "/" + DateTime.Now.ToString("dd.MM.yyyy HH-mm"));
            System.IO.File.AppendAllText(di.FullName + "/" + collection["Name"] + "..." + collection["NameOfItem"] + ".txt", collection["Link"]);
            System.IO.File.AppendAllText(di.FullName + "/" + collection["Count"] + ".count", "");
            System.IO.File.AppendAllText(di.FullName + "/" + collection["Sum"] + ".sum", "");
            System.IO.File.AppendAllText(di.FullName + "/" + "На модерации.state", "");

            string body = "";
            string[] AllKeys = ((System.Collections.Specialized.NameValueCollection)(collection)).AllKeys;
            foreach (var key in AllKeys)
            {
                body += key + ": " + collection[key] + System.Environment.NewLine;
            }
            System.IO.File.AppendAllText(di.FullName + "/" + "original", body);

            return "Заказ создан";
        }

        public string ChangeState(string _UserLogin, string _Date, string _State)
        {
            string OrderPath = Server.MapPath("/Users/" + _UserLogin + "/Orders/" + _Date);
            var StateSearchPattern = new System.Text.RegularExpressions.Regex(@"$(?<=\.(state))", System.Text.RegularExpressions.RegexOptions.IgnoreCase);
            var statefilenames = Directory.GetFiles(OrderPath).Where(f => StateSearchPattern.IsMatch(f)).OrderBy(f => f);
            if (statefilenames.Count() > 0)
            {
                var statefilename = statefilenames.First();
                string newfilename = Path.GetDirectoryName(statefilename) + "\\" + _State + ".state";
                System.IO.File.Move(statefilename, newfilename);
                return "Статус заказа изменен";
            }
            return "Заказ не найден";
        }
    }
}
