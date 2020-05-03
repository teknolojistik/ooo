<%@ Page Language="C#" MasterPageFile="~/Pages/Master/Admin.Master" AutoEventWireup="true" CodeBehind="Muhasebe.aspx.cs" Inherits="TeknoLojistik.WEB.UI.Pages.Admin.Muhasebe" %>



<asp:Content ID="SideBar" ContentPlaceHolderID="SideBar" runat="server">
    <div class="bg-light border-right" id="sidebar-wrapper">
        <div class="sidebar-heading"><a href="javascript: history.go(-1)">Geri</a></div>
        <div class="list-group list-group-flush">
            <a href="#" class="list-group-item list-group-item-action bg-light">Cariler</a>
            <a href="#" class="list-group-item list-group-item-action bg-light">Hesaplar</a>
        </div>
    </div>
</asp:Content>

<asp:Content ID="Icerik" ContentPlaceHolderID="Icerik" runat="server">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.3.1/css/ol.css" type="text/css">
    <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.3.1/build/ol.js"></script>
    <script src="../../Scripts/muhasebe.js"></script>

    <div id="tabstrip">
        <ul>
            <li class="k-state-active">Anasayfa</li>
            <li><span>İcerik 1
                <button data-type="remove" class="k-button k-button-icon"><span class="k-icon k-i-close"></span></button>
            </span></li>
        </ul>
        <div>
            <div id="map" class="map"></div>
            <p>
                <button type="button" class="k-button" id="appendButton">Append Item</button>
            </p>
        </div>
        <div id="icerik">
            Content 2
        </div>
    </div>

    <style>
        .map {
            height: 400px;
            width: 100%;
        }
    </style>

    <script>
        $(document).ready(function () {
            Muhasebe.Setup();
        });
    </script>

</asp:Content>
