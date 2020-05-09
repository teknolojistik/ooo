using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeknoLojistik.Web.DAL.DB
{
    [Table("Departmanlar")]
   public  class Departman
    {
        public int Id { get; set; }
        public int DepartmanId { get; set; }
        [StringLength(50)]
        public string DepartmanAd { get; set; }

       
    }
}
