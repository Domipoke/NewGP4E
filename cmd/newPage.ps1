$fu=Read-Host -Prompt "Page name"
$f=$fu.toLower()
$n="`n"
$t="`t"
$dp=Split-Path (Split-Path -Path $myInvocation.MyCommand.Path)
New-Item -Path "$dp/pages/" -Name "$f" -ItemType "directory"
New-Item -Path "$dp/pages/$f/" -Name "$f.html" -ItemType "file" -Value "<html>$n$t<head>$n$t$t<title>$fu</title>$n$t</head>$n$t<body>$n$t$t<script src=""./$f.js""></script>$n$t</body>$n</html>"
New-Item -Path "$dp/pages/$f/" -Name "$f.js" -ItemType "file" -Value ""
New-Item -Path "$dp/pages/$f/" -Name "$f.ts" -ItemType "file" -Value ""