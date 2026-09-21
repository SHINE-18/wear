Add-Type -AssemblyName System.Drawing

$src = "C:\Users\shine\.gemini\antigravity-ide\brain\3de8b0f0-bfe1-4a4f-9a55-58d0920d1287\.user_uploaded\media_1789475139587.png"
$bmp = New-Object System.Drawing.Bitmap($src)

Write-Host "Source image size: $($bmp.Width) x $($bmp.Height)"

# In the screenshot, between the dashed lines (e.g. from x=380 to x=680, and y=50 to y=350)
# there is clean pure noise texture without any text or lines.
# Let's find an area completely clear of the letter 'S' (which is on the bottom left)
# and clear of the two dashed vertical lines.
$cropWidth = 240
$cropHeight = 240
$startX = [int]($bmp.Width * 0.45)
$startY = [int]($bmp.Height * 0.20)

Write-Host "Cropping rect: X=$startX, Y=$startY, W=$cropWidth, H=$cropHeight"

$rect = New-Object System.Drawing.Rectangle($startX, $startY, $cropWidth, $cropHeight)
$cropBmp = $bmp.Clone($rect, $bmp.PixelFormat)

$outPath = "d:\PROJECTS\Wearguarddddd\public\images\white-noise-exact.png"
$cropBmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)

Write-Host "Successfully saved exact texture to $outPath"

$cropBmp.Dispose()
$bmp.Dispose()
