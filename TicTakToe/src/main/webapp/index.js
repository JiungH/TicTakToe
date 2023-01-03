const map = document.body.querySelector('.map');

const title = document.createElement('h1');
title.innerText = "TIC TAC TOE!";
map.append(title);



const fight = document.createElement('h2');
fight.innerText = "You and Me";
map.append(fight);


const SIZE = 3;

const mark = [];
let win = 0;
let turn = 1;

// set map 
for (let i = 0; i < SIZE; i++) {
    const row = [];
    const mapRow = document.createElement('div');
    mapRow.setAttribute('class', 'row')
    for (let j = 0; j < SIZE; j++) {
        row.push(0);
        const box = document.createElement('div');
        box.setAttribute('class', 'box');
        box.setAttribute('id', `y${i}x${j}`)

        box.addEventListener('click', e => {
            const yx = box.getAttribute('id');
            const y = parseInt(yx.charAt(1));
            const x = parseInt(yx.charAt(3));
            if (mark[y][x] === 0) {
                if (turn === 1){
                    box.setAttribute('style', 'background-color : #9acdfb70');
                    box.innerHTML = 'O';
            }else{
                    box.setAttribute('style', 'background-color :  #ffafaf70');
                    box.innerHTML = 'X';
               }
                mark[y][x] = turn;
                checkWin();
                turn = turn == 1 ? 2 : 1;
            }
        })

        mapRow.append(box);
    }
    mark.push(row);
    map.append(mapRow);
}


function checkWin() {
    for (let i = 0; i < mark.length; i++) {
        let cnt = 0;
        for (let j = 0; j < mark[i].length; j++) {
            if (mark[i][j] === turn) {
                cnt++;
            }
            if (cnt === 3) {
                win = turn;
                break;
            }
        }
    }

    for (let i = 0; i < mark.length; i++) {
        let cnt = 0;
        for (let j = 0; j < mark[i].length; j++) {
            if (mark[j][i] === turn) {
                cnt++;
            }
            if (cnt === 3) {
                win = turn;
                break;
            }
        }
    }

    if (mark[0][0] === turn && mark[1][1] === turn && mark[2][2] === turn) {
        win = turn;
    }

    if (mark[0][2] === turn && mark[1][1] === turn && mark[2][0] === turn) {
        win = turn;
    }

    let sameCnt = 0;
    for (let i = 0; i < mark.length; i++) {
        for (let j = 0; j < mark[i].length; j++) {
            if (mark[i][j] > 0) {
                sameCnt++;
                if (sameCnt === 9 && win === 0) {
                    alert("We're both winner!!!");
                    location.reload();
                }
            }
        }
    }

    if (win === turn) {
        
        if(win === 1){
            alert(`You're a winner!!!`);
        }else{
            alert(`I'm a winner!!!`);
        }
        location.reload();
    }
}
