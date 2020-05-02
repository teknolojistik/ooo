var personel = {

    Setup: function () {
        this.GridOlustur();
        this.Ekle();
        this.Guncelle();
    },

    GridOlustur: function () {

        var self = this;

        $.ajax({
            url: "/Services/srvPersonel.asmx/Listele",
            method: "post",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (o) {
                console.log("Personel grid oluştur metodu successe girdi.");
                var sonuc = o.d;
                $("#yukleniyor").hide();
                var ds = new kendo.data.DataSource({
                    data: sonuc
                });

                Grid(ds);
            },
            error: function (o) {
                console.log(o);
            }
        });

        function Grid(ds) {
            console.log("Personel")
            $("#grid").kendoGrid({
                dataSource: ds,
                height: "100%",
                groupable: true,
                sortable: true,
                selectable: true,
                pageable: {
                    refresh: true,
                    pageSizes: true,
                    buttonCount: 5
                },
                columns: [
                    {
                        field: "TCKimlikNo",
                        height: 100,
                        title: "TCKimlikNo"
                    },
                    {
                        field: "Ad",
                        height: 100,
                        title: "Ad"
                    },
                    {
                        field: "Soyad",
                        height: 100,
                        title: "Soyad"
                    },
                    
                    {
                        field: "TelefonNo",
                        height: 100,
                        title: "TelefonNo"
                    },
                    {
                        field: "Adres",
                        height: 100,
                        title: "Adres"
                    },
                    {
                        field: "DepartmanId",
                        height: 100,
                        title: "DepartmanId"
                    },
                    {
                        field: "KullaniciAd",
                        height: 100,
                        title: "KullaniciAd"
                    },
                    {
                        field: "Sifre",
                        height: 100,
                        title: "Sifre"
                    },
                    {
                        command: [{
                            className: "btn-destroy", name: "destroy", text: "Sil", style: "color: red;"
                        }]
                    }
                ],
                change: function (e) {

                },
                editable: {
                    mode: "popup",
                    window: {
                        title: "Güncelle",
                        animation: true,
                        Template: "/View/Personel/Guncelle.html"
                    }
                },
                remove: function (e) {
                    console.log("Grid silme işlemine girdi.");
                    var sonuc = e.model;
                    self.Sil(sonuc.Id);
                }
            });
        }
    },


    Guncelle: function () {

        var self = this;

        $("#btnGuncelle").click(function () {

            var grid = $("#grid").data("kendoGrid");
            grid.editRow(grid.select());

            $(".k-grid-update").click(function () {
                Guncelle();
            })
        })


        function Guncelle() {
            var grid = $("#grid").data("kendoGrid");
            var dataItem = grid.dataItem(grid.select());

            var data = {
                Id: dataItem.Id,
                TCKimlikNo: $("input[name$='TCKimlikNo']").val(),
                Ad: $("input[name$='Ad']").val(),
                Soyad: $("input[name$='Soyad']").val(),
                TelefonNo: $("input[name$='TelefonNo']").val(),
                Adres: $("input[name$='Adres']").val(),
                DepartmanId: $("input[name$='DepartmanId']").val(),
                KullaniciAd: $("input[name$='KullaniciAd']").val(),
                Sifre: $("input[name$='Sifre']").val(),
            };

            $.ajax({
                url: "/Services/srvPersonel.asmx/Guncelle",
                data: JSON.stringify({ p: data }),
                method: "post",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (o) {
                    console.log("Giris metodu successe girdi.");
                    var sonuc = o.d;
                    $("#yukleniyor").hide();
                    if (sonuc) {
                        self.GridOlustur();
                        kendo.alert("Personel Guncellendi.");
                    }

                    else
                        kendo.alert("Bir hata oluştu!");


                },
                error: function (o) {
                    console.log(o);
                }
            })
        }
    },



    Ekle: function () {

        var self = this;

        $("#btnEkle").click(function () {
            var win = $("#window").kendoWindow({
                title: "Ekle",
                height: 350,
                width: 400,
                content: "/View/Personel/Ekle.html",
                modal: true,
                animation: {
                    open: {
                        effects: "fade:in"
                    }
                },
                open: function () {

                },
                zIndex: 99
            }).data("kendoWindow").center();

            win.element.on("click", "#btnKaydet", function () {
                Ekle();
            });
        })

        function Ekle() {
            var data = {
                TCKimlikNo: $("#txtTCKimlikNo").val(),
                Ad: $("#txtAd").val(),
                Soyad: $("#txtSoyad").val(),
                TelefonNo: $("#txtTelefonNo").val(),
                Adres: $("#txtAdres").val(),
                DepartmanId: $("#txtDepartmanId").val(),
                KullaniciAd: $("#txtKullaniciAdi").val(),
                Sifre: $("#txtSifre").val(),
            };

            $.ajax({
                url: "/Services/srvPersonel.asmx/Ekle",
                data: JSON.stringify({ a: data }),
                method: "post",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (o) {
                    console.log("Giris metodu successe girdi.");
                    var sonuc = o.d;
                    $("#yukleniyor").hide();
                    if (sonuc)
                        kendo.alert("Personel eklendi.");
                    else
                        kendo.alert("Bir hata oluştu!");

                    self.GridOlustur();
                    var win = $("#window").data("kendoWindow");
                    win.close();

                },
                error: function (o) {
                    console.log(o);
                }
            })
        }
    },

    Sil: function (id) {

        var self = this;

        $.ajax({
            url: "/Services/srvPersonel.asmx/Sil",
            data: JSON.stringify({ a: id }),
            method: "post",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (o) {
                console.log("Giris metodu successe girdi.");
                var sonuc = o.d;
                $("#yukleniyor").hide();
                if (sonuc > 0)
                    kendo.alert("Personel Silindi.");
                else
                    kendo.alert("Bir hata oluştu!");

                self.GridOlustur();
                var win = $("#window").data("kendoWindow");
                win.destroy();

            },
            error: function (o) {
                console.log(o);
            }
        })
    }
}