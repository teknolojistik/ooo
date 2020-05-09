using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeknoLojistik.Web.DAL.DB
{
    public class TeknoLojistikContext : DbContext
    {
        public TeknoLojistikContext() : base("name=TeknoLojistikCstr")
        {

        }
        public virtual DbSet<Departman> Departmanlar { get; set; }
        public virtual DbSet<Personel> Personeller { get; set; }
        public virtual DbSet<Arac> Araclar { get; set; }
        public virtual DbSet<Firma> Firmalar { get; set; }
        public virtual DbSet<Talep> Talepler { get; set; }
        public virtual DbSet<Sehir> Sehirler { get; set; }
        public virtual DbSet<Ilce> Ilceler { get; set; }
        public virtual DbSet<Kullanici> Kullanicilar { get; set; }

    }
}
