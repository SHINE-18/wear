Add-Type -AssemblyName System.Drawing

$srcPath = "d:\PROJECTS\Wearguarddddd\public\images\white-noise-exact.png"
$bmp = New-Object System.Drawing.Bitmap($srcPath)
$w = $bmp.Width
$h = $bmp.Height

$seamless = New-Object System.Drawing.Bitmap($w, $h)

$blend = 24 # 24 pixel edge feathering for seamless wrap

for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
        $p = $bmp.GetPixel($x, $y)
        $r = $p.R
        $g = $p.G
        $b = $p.B

        # Horizontal blend
        if ($x -lt $blend) {
            $t = $x / $blend
            # Weight: t for current, (1-t) for right-edge corresponding pixel
            $pRight = $bmp.GetPixel($w - $blend + $x, $y)
            $r = [int]($r * $t + $pRight.R * (1 - $t))
            $g = [int]($g * $t + $pRight.G * (1 - $t))
            $b = [int]($b * $t + $pRight.B * (1 - $t))
        }

        # Vertical blend
        if ($y -lt $blend) {
            $t = $y / $blend
            $pBottom = $bmp.GetPixel($x, $h - $blend + $y)
            $r = [int]($r * $t + $pBottom.R * (1 - $t))
            $g = [int]($g * $t + $pBottom.G * (1 - $t))
            $b = [int]($b * $t + $pBottom.B * (1 - $t))
        }

        $seamless.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $r, $g, $b))
    }
}

$outPath = "d:\PROJECTS\Wearguarddddd\public\images\white-noise-seamless.png"
$seamless.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Generated 100% seamless tile at $outPath"

$seamless.Dispose()
$bmp.Dispose()
