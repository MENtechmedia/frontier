<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Frontier | Login</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link href="/css/app.css" type="text/css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    </head>
    <body>
        <div id="app">
            <router-view></router-view>
        </div>
        <script src="/js/app.js"></script>
    </body>
</html>
