watchman watch-del-all

rm -rf node_modules
rm -fr $TMPDIR/react-*
rm -rf android/build

./scripts/xcodeclean.sh

npm install

cd android
./gradlew clean
cd ..

cd ios
pod deintegrate
pod install
cd ..

echo "React cleaning done!"