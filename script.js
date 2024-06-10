document.addEventListener("DOMContentLoaded", function() {
    const followBtn = document.querySelector('.btn');

    followBtn.addEventListener('click', function() {
        followBtn.textContent = followBtn.textContent === 'Follow' ? 'Following' : 'Follow';
        followBtn.classList.toggle('following');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var videos = document.querySelectorAll('.video');
    var backgroundImg = document.querySelector('.profile img.background');
    var foregroundImg = document.querySelector('.profile img.foreground');
    videos.forEach(function(video) {
        video.addEventListener('click', function() {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) { // Firefox
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) { // IE/Edge
                video.msRequestFullscreen();
            }else if (video.mozRequestFullScreen) { //firefox
                video.mozRequestFullScreen();
            }
            video.play(); 
        });
        video.addEventListener('fullscreenchange', function() {
            if (document.fullscreenElement) {
                video.play();
            } else {
                video.pause();
            }
        });
        video.addEventListener('webkitfullscreenchange', function() {
            if (document.webkitFullscreenElement) {
                video.play();
            } else {
                video.pause();
            }
        });

    });

    function enableFullscreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        } else {
            alert('Your browser does not support fullscreen API.');
        }
    }

    backgroundImg.addEventListener('click', function() {
        enableFullscreen(backgroundImg);
    });

    foregroundImg.addEventListener('click', function() {
        enableFullscreen(foregroundImg);
    });

    
});

document.addEventListener('DOMContentLoaded', function() {
    var icons = document.querySelectorAll('.material-symbols-outlined');
    var line = document.querySelector('.line');
    var content = document.getElementById('content');
    icons.forEach(function(icon, index) {
        icon.addEventListener('click', function() {
            
            icons.forEach(function(i) {
                i.classList.remove('active');
            });

        
            icon.classList.add('active');

            
            var iconRect = icon.getBoundingClientRect();
            var iconCenter = iconRect.left + iconRect.width / 2;

            
            var lineWidth = line.offsetWidth;
            line.style.left = `calc(${iconCenter - lineWidth / 2}px)`;

            if (icon.id === 'icon2') {
                content.innerHTML = `
                    <div class="reels">
        
        <div class="reel-item">
          <video controls class="video" id="reel1">
            <source src="reel1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="reel-item">
          <video controls class="video" id="reel2">
            <source src="reel2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="reel-item">
          <video controls class="video" id="reel3">
            <source src="reel3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="reel-item">
          <video controls class="video" id="reel4">
            <source src="reel3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="reel-item">
          <video controls class="video" id="reel5">
            <source src="reel3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="reel-item">
          <video controls class="video" id="reel6">
            <source src="reel3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
                `;
            } else {
                content.innerHTML = '<div class="empty-div"></div>';
            }
        });
    });
});


