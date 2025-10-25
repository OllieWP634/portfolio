particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 150,
      "density": { "enable": true, "value_area": 1600 }
    },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": { "enable": false }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": { "enable": false }
    },
    "line_linked": { "enable": false },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },

  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false
      },
      "resize": true
    },
    "modes": {
      "bubble": {
        "distance": 180,
        "size": 0,
        "duration": 0.8,
        "opacity": 0,
        "speed": 2
      },
      "repulse": { "distance": 200, "duration": 0.4 }
    }
  },

  "retina_detect": true
});