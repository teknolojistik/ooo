using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeknoLojistik.Web.DAL.DB;

namespace TeknoLojistik.Web.DAL
{
   public class dalPersonel
    {
        public static List<Personel> Listele()
        {
            TeknoLojistikContext ctx = new TeknoLojistikContext();

            List<Personel> lst = ctx.Personeller.ToList();

            return lst;
        }

        public static bool Ekle(Personel p)
        {
            TeknoLojistikContext ctx = new TeknoLojistikContext();

            ctx.Personeller.Add(p);
            var sonuc = ctx.SaveChanges();
            if (sonuc > 0)
                return true;
            else
                return false;
        }


        public static int Guncelle(Personel p)
        {

            try
            {
                TeknoLojistikContext ctx = new TeknoLojistikContext();

                var deger = ctx.Personeller.Where(o => o.Id == p.Id).SingleOrDefault();


                deger.TCKimlikNo = p.TCKimlikNo;
                deger.Ad = p.Ad;
                deger.Soyad = p.Soyad;
                deger.Adres = p.Adres;
                deger.DepartmanId = p.DepartmanId;
                deger.KullaniciAd = p.KullaniciAd;
                deger.Sifre = p.Sifre;
                return ctx.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }

        }



        public static int Sil(int id)
        {
            TeknoLojistikContext ctx = new TeknoLojistikContext();
            var sonuc = ctx.Personeller.Where(o => o.Id == id).FirstOrDefault();
            ctx.Personeller.Remove(sonuc);
            return ctx.SaveChanges();
        }
    }
}

