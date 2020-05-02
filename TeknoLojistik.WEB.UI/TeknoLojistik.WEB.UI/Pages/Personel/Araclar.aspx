<%@ Page Title="" Language="C#" MasterPageFile="~/Pages/Master/Personel.Master" AutoEventWireup="true" CodeBehind="Araclar.aspx.cs" Inherits="TeknoLojistik.WEB.UI.Pages.Personel.Araclar" %>

<asp:Content ID="Icerik" ContentPlaceHolderID="Icerik" runat="server">
    <input type="button" id="btnEkle" value="Araç Ekle" />
    <input type="button" id="btnGuncelle" value="Araç Güncelle" />
    <div id="grid"></div>
    <div id="window"></div>

    <script src="../../Scripts/arac.js"></script>
    <script>
        $(document).ready(function () {
            Arac.Setup();
        });
    </script>
</asp:Content>

