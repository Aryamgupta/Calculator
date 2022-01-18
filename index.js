'use strict';
let screen = document.getElementById('main_screen');
let button = document.querySelectorAll('.btno');

let keyBoard = document.querySelector('.key_board');
let localScreen0 = document.querySelector('.local_screen0');
let localScreen1 = document.querySelector('.local_screen1');
let buttonText, x, y;

//screen button funtion

// calculate function

const calculate = function () {
  buttonText = eval(screen.value);
  screen.value = buttonText;
};
const clearText = function () {
  buttonText = '';
  screen.value = buttonText;
};
const setX = function () {
  localScreen0.value = screen.value;
  x = localScreen0.value;
  document.getElementById('x').textContent = 'val x';
};
const valX = function () {
  screen.value += localScreen0.value;
};
const setY = function () {
  localScreen1.value = screen.value;
  y = localScreen1.value;
  document.getElementById('y').textContent = 'val y';
};
const valY = function () {
  screen.value += localScreen1.value;
};
const resetX = function () {
  localScreen0.value = screen.value;
  document.getElementById('x').textContent = 'set x';
};
const resetY = function () {
  localScreen1.value = screen.value;
  document.getElementById('y').textContent = 'set y';
};
const factiorial = function () {
  if (screen.value === '') screen.value = x;
  let z = 1;
  for (let i = 1; i <= screen.value; i++) {
    z = z * i;
  }
  buttonText = z;
  screen.value = buttonText;
};
const power = function () {
  buttonText = Math.pow(x, y);
  screen.value = buttonText;
};
const panel = function () {
  document.querySelector('.panel').classList.toggle('none');
  if (document.querySelector('.panel').classList.contains('none')) {
    for (let z of button) {
      z.style.height = '70px';
    }
  } else if (!document.querySelector('.panel').classList.contains('none')) {
    for (let z of button) {
      z.style.height = '50px';
    }
  }
};
document.getElementById('up_down').addEventListener('click', function () {
  panel();
});

// up_down;

// key pad funtion on screen

for (let item of button) {
  item.addEventListener('click', function () {
    // multiply
    if (item.textContent === 'X') {
      buttonText = '*';
      screen.value += buttonText;
    } // equal
    else if (item.textContent === '=') {
      calculate();
    } //clear
    else if (item.textContent === 'C') {
      clearText();
    }
    //sin
    else if (item.textContent === 'sin') {
      buttonText = screen.value !== '' ? Math.sin(screen.value) : Math.sin(x);
      screen.value = buttonText;
    } //cos
    else if (item.textContent === 'cos') {
      buttonText = screen.value !== '' ? Math.cos(screen.value) : Math.cos(x);
      screen.value = buttonText;
    }
    //tan
    else if (item.textContent === 'tan') {
      buttonText = screen.value !== '' ? Math.tan(screen.value) : Math.tan(x);
      screen.value = buttonText;
    }
    //ln base e
    else if (item.textContent === 'ln') {
      buttonText = screen.value !== '' ? Math.log(screen.value) : Math.log(x);
      screen.value = buttonText;
    } // e
    else if (item.textContent === 'e') {
      buttonText = Math.E;
      screen.value = buttonText;
    } else if (item.textContent === 'π') {
      // pi
      buttonText = Math.PI;
      screen.value = buttonText;
    } // square root
    else if (item.textContent === '√') {
      buttonText = screen.value !== '' ? Math.sqrt(screen.value) : Math.sqrt(x);

      screen.value = buttonText;
    } // sqaure
    else if (item.textContent === 'x²') {
      buttonText = screen.value !== '' ? screen.value * screen.value : x * x;
      screen.value = buttonText;
    } //cube root
    else if (item.textContent === 'x³') {
      buttonText =
        screen.value !== ''
          ? screen.value * screen.value * screen.value
          : x * x * x;
      screen.value = buttonText;
    } //cube
    else if (item.textContent === '∛') {
      buttonText = screen.value !== '' ? Math.cbrt(screen.value) : Math.cbrt(x);
      screen.value = buttonText;
    } // set x
    else if (item.textContent === 'set x') {
      setX();
    } // set y
    else if (item.textContent === 'set y') {
      setY();
    } // val x
    else if (item.textContent === 'val x') {
      valX();
    } //val y
    else if (item.textContent === 'val y') {
      valY();
    } // reset x
    else if (item.textContent === 'Re x') {
      resetX();
    } // reset y
    else if (item.textContent === 'Re y') {
      resetY();
    } // power
    else if (item.textContent === 'x^y') {
      power();
    } // e^x
    else if (item.textContent === '!') {
    } // e^x
    else if (item.textContent === 'e^x') {
      buttonText = screen.value !== '' ? Math.exp(screen.value) : Math.exp(x);
    } else if (item.textContent === 'B') {
      screen.value = screen.value.slice(0, -1);
    }
    // 16 keys -  0to 9 and / + - () .
    else {
      buttonText = item.textContent;
      screen.value += buttonText;
      // console.log(item.textContent);
    }
  });
}

// key board function

document.addEventListener('keypress', function (e) {
  console.log(e);
  if (
    e.key === '1' ||
    e.key === '2' ||
    e.key === '3' ||
    e.key === '4' ||
    e.key === '5' ||
    e.key === '6' ||
    e.key === '7' ||
    e.key === '8' ||
    e.key === '9' ||
    e.key === '0' ||
    e.key === '%' ||
    e.key === '*' ||
    e.key === '+' ||
    e.key === '-' ||
    e.key === '/' ||
    e.key === '(' ||
    e.key === ')' ||
    e.key === '.' ||
    e.key === '/'
  ) {
    screen.value += e.key;
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'C' || e.key == 'c') {
    clearText();
  } else if (e.key === 'x') {
    setX();
  } else if (e.key === 'X') {
    valX();
  } else if (e.key === 'y') {
    setY();
  } else if (e.key === 'Y') {
    valY();
  } else if (e.key === '<') {
    resetX();
  } else if (e.key === '>') {
    resetY();
  } else if (e.key === '!') {
    factiorial();
  } else if (e.key === 'P' || e.key === 'p') {
    buttonText = Math.PI;
    screen.value = buttonText;
  } else if (e.key === 'e' || e.key === 'E') {
    buttonText = Math.E;
    screen.value = buttonText;
  } else if (e.key === '^') {
    power();
  }
});
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape') {
    panel();
  } else if (e.key === 'Backspace') {
    screen.value = screen.value.slice(0, -1);
  }
});
