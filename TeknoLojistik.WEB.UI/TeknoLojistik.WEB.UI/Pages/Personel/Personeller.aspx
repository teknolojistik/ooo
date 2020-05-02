<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Pages/Master/Personel.Master" CodeBehind="Personeller.aspx.cs" Inherits="TeknoLojistik.WEB.UI.Pages.Personel.Personel" %>

<asp:Content ID="Icerik" ContentPlaceHolderID="Icerik" runat="server">
    <input type="button" id="btnEkle" value="Personel Ekle" />
    <input type="button" id="btnGuncelle" value="Personel Güncelle" />
    <div id="grid"></div>
    <div id="window"></div>

    <script src="../../Scripts/personel.js"></script>
    <script>
        $(document).ready(function () {
            personel.Setup();
        });
    </script>
</asp:Content>
