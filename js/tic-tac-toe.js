const tic_tac_toe = {

    // ATTRIBUTES
    board: ['', '', '', '', '', '', '', '', ''],
    symbols: {
        options: ['O', 'X'],
        turn_index: 0,
        change() {
            this.turn_index = (this.turn_index === 0 ? 1 : 0);
        }
    },
    container_element: null,
    gameover: false,
    winning_sequences: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ],

    // FUNCTIONS
    init(container) {
        this.container_element = container
    },

    make_play(position) {
        if (this.gameover) return false
        if (this.board[position] === '') {
            this.board[position] = this.symbols.options[this.symbols.turn_index]
            this.draw()
            let winning_sequences_index = this.check_winning_sequences(this.symbols.options[this.symbols.turn_index])
            if (winning_sequences_index >= 0) {
                this.game_is_over()
            } else {
                this.symbols.change()
            }
            return true
        } else {
            return false
        }
    },

    game_is_over() {
        this.gameover = true
        alert(`O jogo acabou! Quem venceu foi o: '${this.symbols.options[this.symbols.turn_index]}'`)
    },

    start() {
        this.board.fill('')
        this.draw()
        this.gameover = false
    },

    check_winning_sequences(simbol) {
        for (i in this.winning_sequences) {
            if (this.board[this.winning_sequences[i][0]] == simbol &&
                this.board[this.winning_sequences[i][1]] == simbol &&
                this.board[this.winning_sequences[i][2]] == simbol) {
                console.log(`Sequencia vencedora: ${i}`)
                return i;
            }
        }
        return -1
    },

    draw() {
        let content = ''

        for (i in this.board) {
            content += '<div onclick="tic_tac_toe.make_play(' + i + ')">' + this.board[i] + '</div>'
        }
        this.container_element.innerHTML = content
    },
}