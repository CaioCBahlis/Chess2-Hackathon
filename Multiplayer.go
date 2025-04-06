package main

import (
	"fmt"
	"net/http"
	"sync"
)

var (
	waitingPlayers = make(map[string]string) // option -> playerID
	mu             sync.Mutex
)

func joinOptionHandler(w http.ResponseWriter, r *http.Request) {
	option := r.URL.Query().Get("option") // option1 or option2
	playerID := r.URL.Query().Get("playerID")

	if option != "1" && option != "2" {
		http.Error(w, "Invalid option", http.StatusBadRequest)
		return
	}

	mu.Lock()
	defer mu.Unlock()

	if otherPlayer, exists := waitingPlayers[option]; exists {

		delete(waitingPlayers, option)
		fmt.Fprintf(w, "startGame?player1=%s&player2=%s", otherPlayer, playerID)
	} else {
		waitingPlayers[option] = playerID
		fmt.Fprintf(w, "wait")
	}
}
