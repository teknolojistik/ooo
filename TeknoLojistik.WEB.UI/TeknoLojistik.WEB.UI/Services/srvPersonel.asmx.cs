using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using TeknoLojistik.Web.BLL;
using TeknoLojistik.Web.DAL.DB;

namespace TeknoLojistik.WEB.UI.Services
{
    /// <summary>
    /// Summary description for srvPersonel
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
     [System.Web.Script.Services.ScriptService]
    public class srvPersonel : System.Web.Services.WebService
    {

        [WebMethod]
        public List<Personel> Listele()
        {
            return bllPersonel.Listele();
        }

        [WebMethod]

        public bool Ekle(Personel p)
        {
            return bllPersonel.Ekle(p);
        }


        [WebMethod]
        public int Sil(int p)
        {
            return bllPersonel.Sil(p);
        }

        [WebMethod]
        public int Guncelle(Personel p)
        {
            return bllPersonel.Guncelle(p);
        }
    }
}
