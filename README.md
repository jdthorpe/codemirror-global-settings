<!--
images were converted like so: 
homebrew install imagemagick
cd public/assets
magick -background none ./cm-icon.svg -resize 128x128 -format png ./cm-icon-128.png
magick -background none ./cm-icon.svg -resize 48x48 -format png ./cm-icon-48.png
magick -background none ./cm-icon.svg -resize 32x32 -format png ./cm-icon-32.png
magick -background none ./cm-icon.svg -resize 16x16 -format png ./cm-icon-16.png

clean up befor publishing: 

ls -aR build | grep '\(~\|swp\)$' | xargs rm -f

-->



Build with `npm run build`


