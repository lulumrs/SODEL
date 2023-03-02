// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 










  //   1  install retroarch
  //   2  install --help
  //   3  sudo rfkill unblock all
  //   4  sudo apt update
  //   5  sudo apt full-upgrade
  //   6  sudo rfkill unblock all
  //   7  ifconfig -a
  //   8  sudo apt install net-tools
  //   9  ifconfig -a
  //  10  lspci -k -nn | grep -A 3 -i net 
  //  11  sudo lshw -C network 
  //  12  sudo rfkill list 
  //  13  echo "blacklist ideapad_laptop" | sudo tee /etc/modprobe.d/ideapad.conf
  //  14  nmcli dev wifi
  //  15  sudo apt-get update && sudo apt-get upgrade
  //  16  sudo apt-get install build-essential linux-headers-$(uname -r) git
  //  17  echo "options ath10k_core skip_otp=y" | sudo tee /etc/modprobe.d/ath10k_core.conf
  //  18  wget https://www.kernel.org/pub/linux/kernel/projects/backports/stable/v4.4.2/backports-4.4.2-1.tar.gz
  //  19  tar -zxvf backports-4.4.2-1.tar.gz
  //  20  cd backport-4.4.2-1
  //  21  make defconfig-wifi
  //  22  make
  //  23  sudo make install
  //  24  git clone https://github.com/kvalo/ath10k-firmware.git
  //  25  sudo cp -r ath10k-firmware/QCA9377 /lib/firmware/ath10k/
  //  26  sudo cp /lib/firmware/ath10k/QCA9377/hw1.0/firmware-5.bin_WLAN.TF.1.0-00267-1 /lib/firmware/ath10k/QCA9377/hw1.0/firmware-5.bin
  //  27  sudo dkms status
  //  28  sudo nano /etc/modprobe.d/blacklist.conf
  //  29  sudo lshw -C network
  //  30  lsmod
  //  31  sudo lshw -C network
  //  32  sudo lspci -v
  //  33  sudo apt update && sudo apt upgrade
  //  34  sudo lshw -C network
  //  35  apt-get install git
  //  36  sudo apt-get install git
  //  37  cd /usr/include
  //  38  ls
  //  39  cd
  //  40  sudo apt install -y g++ cmake make git libgtk2.0-dev pkg-config
  //  41  git clone
  //  42  git clone https://github.com/opencv/opencv.git
  //  43  mkdir -p build && cd build
  //  44  cmake ../opencv
  //  45  make -j4
  //  46  sudo make install
  //  47  cd
  //  48  $ sudo su
  //  49  $ sudo apt-get install build-essential
  //  50  $ sudo apt-get install libavformat-dev
  //  51  $ sudo apt-get install ffmpeg
  //  52  $ sudo apt-get install libcv2.3 libcvaux2.3 libhighgui2.3 python-opencv opencv-doc libcv-dev libcvaux-dev libhighgui-dev
  //  53  sudo su
  //  54  git clone https://git.ecam.fr/lucas.marais/SignalLab1.git
  //  55  cd SignalLab1
  //  56  make
  //  57  pkg-config -cflags -libs opencv
  //  58  pkg-config --cflags --libs opencv
  //  59  pkg-config --cflags --libs opencv4
  //  60  pkg-config --cflags --libs opencv2
  //  61  pkg-config --cflags --libs opencv
  //  62  pkg
  //  63  sudo apt install pkg
  //  64  pkg-config
  //  65  pkg-config help
  //  66  pkg help
  //  67  pkg-config --cflags --libs opencv
  //  68  pkg-config --cflags --libs opencv4
  //  69  make
  //  70  sudo vi /usr/local/lib/pkgconfig/opencv.pc
  //  71  sudo apt-get install libcv-dev libcvaux-dev libhighgui-dev
  //  72  sudo apt-get install libopencv-dev
  //  73  cd
  //  74  sudo apt-get install gcc-multilib g++-multilib
  //  75  sudo apt install -y g++
  //  76  printenv
  //  77  printenv editor
  //  78  # Install minimal prerequisites (Ubuntu 18.04 as reference)
  //  79  sudo apt update && sudo apt install -y cmake g++ wget unzip
  //  80  # Download and unpack sources
  //  81  wget -O opencv.zip https://github.com/opencv/opencv/archive/4.x.zip
  //  82  unzip opencv.zip
  //  83  # Create build directory
  //  84  mkdir -p build && cd build
  //  85  # Configure
  //  86  cmake  ../opencv-4.x
  //  87  # Build
  //  88  cmake --build .
  //  89  cd
  //  90  # Install minimal prerequisites (Ubuntu 18.04 as reference)
  //  91  sudo apt update && sudo apt install -y cmake g++ wget unzip
  //  92  # Download and unpack sources
  //  93  wget -O opencv.zip https://github.com/opencv/opencv/archive/4.x.zip
  //  94  wget -O opencv_contrib.zip https://github.com/opencv/opencv_contrib/archive/4.x.zip
  //  95  unzip opencv.zip
  //  96  unzip opencv_contrib.zip
  //  97  # Create build directory and switch into it
  //  98  mkdir -p build && cd build
  //  99  # Configure
  // 100  cmake -DOPENCV_EXTRA_MODULES_PATH=../opencv_contrib-4.x/modules ../opencv-4.x
  // 101  # Build
  // 102  cmake --build .
  // 103  ls bin
  // 104  ls lib~
  // 105  ls bin
  // 106  ls lib
  // 107  cd
  // 108  sudo apt-get -y install libopencv-dev build-essential cmake libdc1394-22 libdc1394-22-dev libjpeg-dev libpng12-dev libtiff4-dev libjasper-dev libavcodec-dev libavformat-dev libswscale-dev libxine-dev libgstreamer0.10-dev libgstreamer-plugins-base0.10-dev libv4l-dev libtbb-dev libqt4-dev libmp3lame-dev libopencore-amrnb-dev libopencore-amrwb-dev libtheora-dev libvorbis-dev libxvidcore-dev x264 v4l-utils
  // 109  sudo apt-get update
  // 110  sudo apt-get -y install libopencv-dev build-essential cmake libdc1394-22 libdc1394-22-dev libjpeg-dev libpng12-dev libtiff4-dev libjasper-dev libavcodec-dev libavformat-dev libswscale-dev libxine-dev libgstreamer0.10-dev libgstreamer-plugins-base0.10-dev libv4l-dev libtbb-dev libqt4-dev libmp3lame-dev libopencore-amrnb-dev libopencore-amrwb-dev libtheora-dev libvorbis-dev libxvidcore-dev x264 v4l-utils
  // 111  wget "https://github.com/Itseez/opencv/archive/3.0.0.zip" -O opencv.zip
  // 112  wget "https://github.com/Itseez/opencv_contrib/archive/3.0.0.zip" -O opencv_contrib.zip
  // 113  unzip opencv.zip –d .
  // 114  unzip opencv_contrib.zip –d .
  // 115  cd opencv-3.0.0
  // 116  mkdir build
  // 117  cd build
  // 118  cmake -D CMAKE_BUILD_TYPE=RELEASE -D CMAKE_INSTALL_PREFIX=/full/path/to/opencv-3.0.0/build -D INSTALL_C_EXAMPLES=ON -D BUILD_EXAMPLES=ON -D OPENCV_EXTRA_MODULES_PATH=/full/path/to/opencv_contrib-3.0.0/modules ../
  // 119  make –j4
  // 120  sudo make install
  // 121  cd
  // 122  pkg-config --list-all
  // 123  cp /build/lib/pkgconfig/opencv.pc /usr/local/lib/pkgconfig/opencv3.pc
  // 124  cmake -DOPENCV_GENERATE_PKGCONFIG=ON ../opencv
  // 125  cd build
  // 126  cmake -DOPENCV_GENERATE_PKGCONFIG=ON ../opencv
  // 127  cd
  // 128  sudo apt-get install libopencv*
  // 129  pkg-config --cflags --libs opencv4
  // 130  make
  // 131  pkg-config --libs
  // 132  pkg-config --libs opencv4
  // 133  make
  // 134  pkg-config --cflags --libs opencv4
  // 135  pkg-config --help
  // 136  pkg-config --list-all
  // 137  make
  // 138  ppg
  // 139  ./ppg
  // 140  make
  // 141  git checkout develop
  // 142  git add .
  // 143  git checkout develop
  // 144  git commit -m "changes"
  // 145  git config --global user.email "lucas.marais@ecam.fr"
  // 146  git commit -m "changes"
  // 147  git checkout develop
  // 148  git branch
  // 149  make
  // 150  ./ppg
  // 151  make
  // 152  ./ppg
  // 153  make
  // 154  ./ppg
  // 155  make
  // 156  ./ppg
  // 157  make
  // 158  ./ppg
  // 159  make
  // 160  ./ppg
  // 161  make
  // 162  ./ppg
  // 163  make
  // 164  ./ppg
  // 165  clean
  // 166  clear
  // 167  ./ppg
  // 168  make
  // 169  ./ppg
  // 170  make
  // 171  ./ppg
  // 172  make
  // 173  ./ppg
  // 174  make
  // 175  ./ppg
  // 176  make
  // 177  ./ppg
  // 178  git add .
  // 179  git commit -m "finished with BPM finded sometimes it did not find nothing on the fft"
  // 180  git push
  // 181  make
  // 182  ./ppg
  // 183  make
  // 184  ./ppg
  // 185  sudo systemctl reboot --firmware-setup
  // 186  git remote add origin https://github.com/lulumrs/SODEL.git
  // 187  git branch -M main
  // 188  git push -u origin main
  // 189  git clone https://github.com/lulumrs/SODEL.git
  // 190  echo "# SODEL" >> README.md
  // 191  git init
  // 192  git add README.md
  // 193  git commit -m "first commit"
  // 194  echo "# SODEL" >> README.md
  // 195  git init
  // 196  git add README.md
  // 197  git commit -m "first commit"
  // 198  git branch -M main
  // 199  git remote add origin https://github.com/lulumrs/SODEL.git
  // 200  git push -u origin main
  // 201  git push
  // 202  git push --set-upstream origin main
  // 203  git remote add origin https://github.com/lulumrs/SODEL.git
  // 204  git remote -v
  // 205  git push --set-upstream origin main
  // 206  git add .
  // 207  git commit "main page"
  // 208  git commit -m "main page"
  // 209  git push
  // 210  git config credential.helper store
  // 211  git push
  // 212  echo "blacklist ideapad_laptop" | sudo tee /etc/modprobe.d/ideapad.conf
  // 213  /etc/modprobe.d/blacklist.conf
  // 214  sudo /etc/modprobe.d/blacklist.conf
  // 215  modprobe
  // 216  lsmod
  // 217  sudo modprobe -r ath9k
  // 218  sudo systemctl enable NetworkManager
  // 219  sudo NetworkManager
  // 220  sudo apt search iwlwifi
  // 221  sudo network ctl
  // 222  sudo networkctl
  // 223  sudo systemctl enable systemd-networkd
  // 224  sudo systemctl start systemd-networkd
  // 225  sudo systemd-networkd
  // 226  sudo networkctl
  // 227  history
  // 228  sudo nano /etc/modprobe.d/blacklist.conf
  // 229  sudo networkctl
  // 230  sudo lshw
  // 231  sudo rfkill list
  // 232  sudo nmcli dev set enp0s31f6 managed yes
  // 233  sudo nmcli 
  // 234  sudo nmcli dev set lo managed yes
  // 235  sudo nmcli 
  // 236  sudo service network-manager restart
  // 237  systemctl start NetworkManager
  // 238  systemctl enable NetworkManager
  // 239  yum install network-scripts
  // 240  systemctl restart network
  // 241  history
