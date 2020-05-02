using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeknoLojistik.Web.DAL;
using TeknoLojistik.Web.DAL.DB;

namespace TeknoLojistik.Web.BLL
{
  public  class bllPersonel
    {
        public static List<Personel> Listele()
        {
            try
            {
                return dalPersonel.Listele();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public static bool Ekle(Personel p)
        {
            try
            {
                return dalPersonel.Ekle(p);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public static int Sil(int p)
        {
            try
            {
                return dalPersonel.Sil(p);
            }
            catch (Exception)
            {
                throw;
            }
        }


        public static int Guncelle(Personel p)
        {
            try
            {
                return dalPersonel.Guncelle(p);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
