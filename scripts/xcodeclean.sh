#! /bin/sh
echo "Xcode clean starts\n"
rm -rfv ~/Library/Developer/Xcode/DerivedData
rm -rfv ~/Library/Caches/com.apple.dt.Xcode
rm -rfv "$(getconf DARWIN_USER_CACHE_DIR)/org.llvm.clang/ModuleCache"
rm -rfv ios/build/Build/
rm -rf ios/build/Index/
rm -rf ios/build/DerivedData/
rm -rf ios/DerivedData/
rm -rf ios/build/ModuleCache/
rm -rf ios/Pods

echo "Xcode cleaned!\n"