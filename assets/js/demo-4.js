Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};

(function() {

    var width, height, largeHeader, canvas, ctx, lines, target, size, animateHeader = true;

    // Main
    initHeader();
    addListeners();
    initAnimation();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        size = width > height ? height : width;
        target = {x: 0, y: height};

        largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height+'px';

        canvas = document.getElementById('demo-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create particles
        lines = [];
        for(var i = 0; i < 90; i++) {
            var l = new Line(Math.random()*360);
            lines.push(l);
        }
    }

    function initAnimation() {
        animate();
    }

    // Event handling
    function addListeners() {
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        size = width > height ? height : width;
        largeHeader.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in lines) {
                lines[i].draw();
            }
        }
        requestAnimationFrame(animate);
    }


    // Canvas manipulation
    function Line(angle) {
        var _this = this;
        // globals
        var ROTATIONAL_VELOCITY = 0.1;
        var VELOCITY_FACTOR = 0.01;
        var FLIP_TIME = 100;
        var ACCELERATION_FACTOR = 0.025;

        // constructor
        (function() {
            // console.log(Math.random());
            _this._flag = true;
            _this.angle = angle;
            _this._rotvel = ROTATIONAL_VELOCITY + 0.1 * (2*Math.random() - 1);
            _this._r1 = 100 + Math.random()*(size < 400 ? 400 : size)/2;
            _this._r2 = 100 + Math.random()*(size < 400 ? 400 : size)/2;
            _this._r1_vel = 0*(size < 400 ? 400 : size)*VELOCITY_FACTOR;
            _this._r2_vel = 0*(size < 400 ? 400 : size)*VELOCITY_FACTOR;
            _this._r1_accel = 1;
            _this._r2_accel = 1;
            _this._timestep = 0;
            _this.TIMEFRAME = Math.floor((Math.floor(Math.random()*FLIP_TIME + FLIP_TIME)/4))*2;
            console.log(_this.TIMEFRAME);
        })();

        this.draw = function() {

            var r1 = this._r1;
            var r2 = this._r2;
            var x1 = r1*Math.cos(_this.angle*(Math.PI/180)) + width*0.5;
            var y1 = r1*Math.sin(_this.angle*(Math.PI/180)) + height*0.48;
            var x2 = r2*Math.cos(_this.angle*(Math.PI/180)) + width*0.5;
            var y2 = r2*Math.sin(_this.angle*(Math.PI/180)) + height*0.48;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = 'rgba(255, 255, 255,'+(0.5+Math.random()*0.2)+')';

            ctx.stroke();

            ctx.beginPath();
            ctx.arc(x1, y1, 2, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255,255,255,'+(0.5+Math.random()*0.2)+')';
            ctx.fill();

            _this.angle += _this._rotvel;
            _this._timestep += 1;

            if (_this._timestep % _this.TIMEFRAME == _this.TIMEFRAME/2) {
                _this._r1_accel *= -1;
                _this._r2_accel *= -1;
                // console.log("FLIPPING");
            }

            _this._r1_vel += _this._r1_accel * ACCELERATION_FACTOR;
            _this._r2_vel += _this._r2_accel * ACCELERATION_FACTOR;

            _this._r1 = (_this._r1 + _this._r1_vel).clamp(0, (size < 400 ? 400 : size));
            _this._r2 = (_this._r2 + _this._r2_vel).clamp(0, (size < 400 ? 400 : size));


            // if (_this._flag) {
            //     console.log(_this);
            //     console.log(ACCELERATION_FACTOR);
            //     _this._flag = false;
            // }
            // console.log(this._r1);
            // console.log(this._r2);
        };
    }

})();