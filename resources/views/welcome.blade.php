<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Frontier | Login</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,500,600,700,800,900" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link href="/css/app.css" type="text/css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    </head>
    <body class="bg-zircon">
        <div id="app">
            <transition name="router-anim" enter-active-class="animated slideInRight" leave-active-class="animated slideOutLeft">
                <router-view/>
            </transition>
        </div>
        <script src="/js/app.js"></script>
    </body>
</html>
