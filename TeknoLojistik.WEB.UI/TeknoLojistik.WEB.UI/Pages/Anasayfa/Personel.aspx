<%@ Page Language="C#" MasterPageFile="~/Pages/Master/Personel.Master" AutoEventWireup="true" CodeBehind="Personel.aspx.cs" Inherits="TeknoLojistik.WEB.UI.Pages.Anasayfa.Personel" %>


<asp:Content ID="SideBar" ContentPlaceHolderID="SideBar" runat="server">
    <div class="bg-light border-right" id="sidebar-wrapper">
        <div class="sidebar-heading"><a href="javascript: history.go(-1)">Geri</a></div>
        <div class="list-group list-group-flush">
            <a href="../Personel/Araclar.aspx" class="list-group-item list-group-item-action bg-light">Araçlar</a>
            <a href="#" class="list-group-item list-group-item-action bg-light">Firmalar</a>
            <a href="../Personel/Personeller.aspx" class="list-group-item list-group-item-action bg-light">Şoförler</a>
        </div>
    </div>
</asp:Content>
