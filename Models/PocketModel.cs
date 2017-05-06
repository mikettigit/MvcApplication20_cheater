﻿using System;
using System.IO;
using System.Net;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
using System.Xml;
using System.Xml.Linq;
using System.Linq;
using System.Collections.Generic;

namespace MvcApplication10.Models
{
    public class PocketModel
    {
        private string serverdomainname;
        private string serverfolderpath;

        private string allpocketsfolderpath;

        private string sourceurl;

        private string messagefrom;
        private string messageto;

        private bool locked;

        private CookieContainer cookiecontainer;

        public string UserLogin;
        public string UserEmail;
        public string UserBalance;

        public string ServerDomainName
        {
            get {
                return serverdomainname;
            }
        }
              
        public bool CacheMode{ 
            get 
            {
                return !String.IsNullOrEmpty(allpocketsfolderpath);
            } 
        }

        public string MessageFrom
        {
            get
            {
                return messagefrom;
            }
        }

        public string MessageTo
        {
            get
            {
                return messageto;
            }
        }

        public string ServerFolderPath
        {
            get
            {
                return serverfolderpath;
            }
        }

        private string AllPocketsFolderPath
        {
            get
            {
                return allpocketsfolderpath;
            }
        }

        public string CurrentPocketFolderPath
        {
            get
            {
                Uri uri = new Uri(sourceurl);
                return AllPocketsFolderPath + uri.Host + "\\";
            }
        }

        public string ConfigFilePath
        {
            get
            {
                Uri uri = new Uri(sourceurl);
                return CurrentPocketFolderPath + uri.Host + ".config";
            }
        }

        private string LogFilePath
        {
            get
            {
                Uri uri = new Uri(sourceurl);
                return CurrentPocketFolderPath + uri.Host + ".log";
            }
        } 

        public ReplacementModel ReplacementModel;
        private EnhanceModel EnhanceModel;

        public PocketModel(string _sourceurl, string _allpocketsfolderpath, string _serverdomainname, string _serverfolderpath, string _messagefrom, string _messageto, bool _locked = false)
        {
            sourceurl = _sourceurl.TrimEnd('/');
            serverdomainname = _serverdomainname;
            serverfolderpath = _serverfolderpath;
            allpocketsfolderpath = _allpocketsfolderpath;

            messagefrom = _messagefrom;
            messageto = _messageto;
            locked = _locked;

            UserLogin = "";

            cookiecontainer = new CookieContainer();

            var LoginRequest = (HttpWebRequest)WebRequest.Create("https://xn--e1araccdibh8b.xn--p1ai/Account/Login?NumberOfError=0");
            LoginRequest.CookieContainer = cookiecontainer;
            LoginRequest.Method = "POST";
            LoginRequest.ContentType = "application/x-www-form-urlencoded";
            var loginData = String.Format("UserName={0}&Password={1}&NumberOfError=0", "server2105@mail.ru", "Asc0depr0");
            var buffer = Encoding.ASCII.GetBytes(loginData);
            LoginRequest.ContentLength = buffer.Length;
            var requestStream = LoginRequest.GetRequestStream();
            requestStream.Write(buffer, 0, buffer.Length);
            requestStream.Close();

            string loginresult = "";
            var response = (HttpWebResponse)LoginRequest.GetResponse();
            using (var streamReader = new StreamReader(response.GetResponseStream()))
            {
                loginresult = streamReader.ReadToEnd();
            }

            XElement xConfiguration = null;
            if (CacheMode)
            {
                if (File.Exists(ConfigFilePath))
                {
                    xConfiguration = XElement.Load(ConfigFilePath);
                    XElement xNotifications = xConfiguration.Element(XName.Get("Notifications"));
                    messagefrom = xNotifications.Element(XName.Get("MessageFrom")).Value;
                    messageto = xNotifications.Element(XName.Get("MessageTo")).Value;
                    XElement xLocked = xConfiguration.Element(XName.Get("Locked"));
                    if (xLocked != null)
                    {
                        if (!Boolean.TryParse(xLocked.Value, out locked))
                        {
                            DateTime LockedFrom = new DateTime();
                            if (DateTime.TryParse(xLocked.Value, out LockedFrom)){
                                locked = (DateTime.Now > LockedFrom);
                            }
                        }
                    }
                }
                else
                {
                    Directory.CreateDirectory(Path.GetDirectoryName(ConfigFilePath));
                    xConfiguration = CreateEmptyConfigFile(ConfigFilePath, messagefrom, messageto, locked);
                }
            }
            ReplacementModel = new ReplacementModel(xConfiguration);
            ReplacementModel.Items.Add(new Replacement(new Uri(sourceurl).Host, serverdomainname, "", true));
            
            EnhanceModel = new EnhanceModel(this);
        }

        private XElement CreateEmptyConfigFile(string _configfilepath, string _messagefrom, string _messageto, bool _locked = false)
        {
            XElement xConfiguration = new XElement("Configuration");
                XElement xNotifications = new XElement("Notifications");
                    XElement XMessageFrom = new XElement("MessageFrom", _messagefrom);
                xNotifications.Add(XMessageFrom);
                    XElement XMessageTo = new XElement("MessageTo", _messageto);
                xNotifications.Add(XMessageTo);
                XElement XLocked = new XElement("Locked", _locked.ToString());
                xConfiguration.Add(XLocked);
            xConfiguration.Add(xNotifications);
                XElement xReplacementModel = new XElement("ReplacementModel");
                    XElement xReplacement = new XElement("Replacement");
                        XAttribute xTarget = new XAttribute("target", "all");
                        xReplacement.Add(xTarget);
                        XElement xWhat = new XElement("what");
                            xWhat.Add(new XCData(""));
                        xReplacement.Add(xWhat);
                        XElement xBy = new XElement("by");
                            xBy.Add(new XCData(""));
                        xReplacement.Add(xBy);
                xReplacementModel.Add(xReplacement);
            xConfiguration.Add(xReplacementModel);
            xConfiguration.Save(_configfilepath);

            return xConfiguration;
        }

        private HttpWebResponse GetResponse(Uri uri)
        {
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(uri);
            request.Method = "GET";
            request.Proxy.Credentials = CredentialCache.DefaultCredentials;
            request.ContentLength = 0;
            request.CookieContainer = cookiecontainer;

            try
            {
                return (HttpWebResponse)request.GetResponse();
            }
            catch (Exception)
            {
            }

            return null;
        }

        private MemoryStream GetStreamFromResponse(string path)
        {
            MemoryStream result = new MemoryStream();

            Uri uri = new Uri(sourceurl + ReplacementModel.Repair(path));

            HttpWebResponse response = GetResponse(uri);
            if (response != null)
            {
                Stream ResponseStream = response.GetResponseStream();
                ResponseStream.CopyTo(result);
                result.Position = 0;
            }

            return result;
        }

        private string GetPocketFilePath(string path, bool isContent, bool isHashed)
        {
            string result = "";

            Uri uri = new Uri(sourceurl + path);

            result = CurrentPocketFolderPath + HttpUtility.UrlDecode(uri.PathAndQuery);
            if (isContent)
            {
                result = result + (uri.PathAndQuery.EndsWith("/") ? "" : "/") + uri.Host + ".htm";
            }
            else {
                result = result.Trim('/');
            }
            result = result.Replace('/', '\\');
            result = result.Replace('?', '&');

            string FileExtention = Path.GetExtension(result);
            string FileName = Path.GetFileNameWithoutExtension(result);
            string FilePath = Path.GetDirectoryName(result);

            result = FilePath + "\\" + FileName;

            if (isHashed)
            {
                result = result + "_" + ReplacementModel.Hash.ToString();
                string NonHashedPath = GetPocketFilePath(path, isContent, false);
                if (File.Exists(NonHashedPath))
                {
                    result = result + "_" + File.GetLastWriteTime(NonHashedPath).GetHashCode().ToString();
                }
            }

            result = result + FileExtention;

            return result;
        }

        private MemoryStream GetStreamFromPocket(string path)
        {
            MemoryStream result = new MemoryStream();
            
            if (File.Exists(path))
            {
                using (var FileStream = new FileStream(path, FileMode.Open))
                {
                    FileStream.CopyTo(result);
                    result.Position = 0;
                }
            }
    
            return result;
        }

        private void SetStreamToPocket(MemoryStream MemoryStream, string path)
        {
            try
            {
    
                DirectoryInfo dInfo = Directory.CreateDirectory(Path.GetDirectoryName(path));
                
                string FileName = Path.GetFileName(path);
                if (FileName.Contains(ReplacementModel.Hash))
                {
                    var SearchPattern = new Regex(@"^(" + FileName.Substring(0, FileName.IndexOf(ReplacementModel.Hash)) + ")", System.Text.RegularExpressions.RegexOptions.IgnoreCase);

                    var filenames = dInfo.GetFiles().Where(f => SearchPattern.IsMatch(f.Name));
                    foreach (var filename in filenames)
                    {
                        filename.Delete();
                    }
                }

                using (var FileStream = new FileStream(path, FileMode.Create))
                {
                    MemoryStream.CopyTo(FileStream);
                    MemoryStream.Position = 0;
                }
            }
            catch{
            }
        }

        public string GetContent(string path, bool isJsOrCss)
        {
            string result = "";

            MemoryStream MemoryStream = new MemoryStream();
            string InstanceFilepath = "";
            string SampleFilepath = "";
            bool isFromSample = false;

            Encoding encoding = Encoding.UTF8;

            if (CacheMode)
            {
                InstanceFilepath = GetPocketFilePath(path, !isJsOrCss, true);
                MemoryStream = GetStreamFromPocket(InstanceFilepath);
                if (MemoryStream.Length == 0)
                {
                    SampleFilepath = GetPocketFilePath(path, !isJsOrCss, false);
                    MemoryStream = GetStreamFromPocket(SampleFilepath);
                    if (MemoryStream.Length != 0)
                    {
                        isFromSample = true;
                    }
                }
            }

            bool IsFromResponse = false;
            if (MemoryStream.Length == 0)
            {
                if (!locked)
                {
                    MemoryStream = GetStreamFromResponse(path);
                    //encoding = Encoding.GetEncoding("windows-1251");
                }
                IsFromResponse = true;
                if (CacheMode)
                {
                    if (File.Exists(LogFilePath)) 
                    {
                        List<string> LogLines = File.ReadAllLines(LogFilePath).ToList();
                        LogLines.Insert(0, DateTime.Now + "\t" + path + (locked ? "\t[locked]" : ""));
                        File.WriteAllLines(LogFilePath, LogLines.Take(300).ToArray());
                    }
                }
            }

            StreamReader MemoryStreamReader = new StreamReader(MemoryStream, encoding);
            result = MemoryStreamReader.ReadToEnd();

            if (IsFromResponse || isFromSample)
            {
                if (!isFromSample)
                {
                    if (CacheMode && !locked)
                    {
                        byte[] byteArray = Encoding.UTF8.GetBytes(result);
                        SetStreamToPocket(new MemoryStream(byteArray), SampleFilepath);
                    }
                }

                if (!String.IsNullOrWhiteSpace(ReplacementModel.Hash)) {
                    if (!isJsOrCss) { 
                        result = EnhanceModel.Enhance(result);
                    }
                    result = ReplacementModel.Replace(result);
                    if (CacheMode && !locked)
                    {
                        byte[] byteArray = Encoding.UTF8.GetBytes(result);
                        SetStreamToPocket(new MemoryStream(byteArray), InstanceFilepath);
                    }
                }
            }

            return result;
        }

        public MemoryStream GetSourceFileStream(string path)
        {
            MemoryStream MemoryStream = new MemoryStream();
            string InstanceFilepath = "";

            if (CacheMode)
            {
                InstanceFilepath = GetPocketFilePath(path, false, false);
                MemoryStream = GetStreamFromPocket(InstanceFilepath);
            }

            bool IsFromResponse = false;
            if (MemoryStream.Length == 0)
            {
                if (!locked)
                {
                    MemoryStream = GetStreamFromResponse(path);
                }
                IsFromResponse = true;
                if (CacheMode)
                {
                    if (File.Exists(LogFilePath))
                    {
                        List<string> LogLines = File.ReadAllLines(LogFilePath).ToList();
                        LogLines.Insert(0, DateTime.Now + "\t" + path + (locked ? "\t[locked]" : ""));
                        File.WriteAllLines(LogFilePath, LogLines.Take(300).ToArray());
                    }
                }
            }

            if (CacheMode && IsFromResponse && !locked)
            {
                SetStreamToPocket(MemoryStream, InstanceFilepath);
            }

            return MemoryStream;
        }
  
    }
}