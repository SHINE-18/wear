$content = [System.IO.File]::ReadAllText("d:\PROJECTS\Wearguarddddd\app\globals.css", [System.Text.Encoding]::UTF8)

# Check for any occurrence of > without spaces, or double >>, or > followed by invalid char
$lines = $content.Split("`n")

for ($i = 0; $i -lt $lines.Length; $i++) {
    $line = $lines[$i]
    if ($line -match '>\s*>' -or $line -match '\+\s*\+' -or $line -match '~\s*~') {
        Write-Host "Double combinator at line $($i + 1): $line"
    }
}

# Also let's check for any selector with > in the file:
$count = 0
for ($i = 0; $i -lt $lines.Length; $i++) {
    $line = $lines[$i]
    if ($line.Contains(">") -and -not $line.Contains("/*") -and -not $line.Contains("clamp") -and -not $line.Contains("calc") -and -not $line.Contains("http")) {
        # print if it looks like a CSS line
        if ($line.Contains("{") -or $line.Trim().EndsWith(",") -or $lines[$i+1].Contains("{")) {
            Write-Host "Line $($i + 1): $line"
            $count++
        }
    }
}
Write-Host "Found $count combinator lines."
