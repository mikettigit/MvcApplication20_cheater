using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcApplication10.Models
{
    public class Order
    {
        public string Id;
        public string Date;
        public string Social;
        public string Service;
        public string Count;
        public string Sum;
        public string Link;
        public string State;
        public string UserLogin;
        public Order() {
            Id = "";
            Date = "";
            Social = "";
            Service = "";
            Count = "";
            Sum = "";
            Link = "";
            State = "";
            UserLogin = "";
        }
    }
}