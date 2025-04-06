package main

import (
	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/chi/v5"
	"log"
	"net/http"
	"strings"
)

/*
type MyPlayer struct {
	responseWriter http.ResponseWriter
	request        *http.Request
	done           chan bool // Signal that the player has been served
}

type MyPool struct {
	mu      sync.Mutex
	waiting []*MyPlayer
	queue   chan *MyPlayer
}

func (p *MyPool) matchmaker() {
	for newPlayer := range p.queue {
		p.mu.Lock()
		p.waiting = append(p.waiting, newPlayer)
		log.Printf("Total waiting %d\n", len(p.waiting))

		if len(p.waiting) >= 2 {
			player1 := p.waiting[0]
			player2 := p.waiting[1]

			p.waiting = p.waiting[2:]

			log.Println("We Found a match!")
			log.Println("Starting the Match Now!")
			log.Println("Serving /build to both players.")

			p.mu.Unlock()

			go func() {
				http.ServeFile(player1.responseWriter, player1.request, "./build/index.html")
				close(player1.done)
			}()
			go func() {
				http.ServeFile(player2.responseWriter, player2.request, "./build/index.html")
				close(player2.done)
			}()

		} else {
			p.mu.Unlock()
			log.Println("Waiting for more players...")
		}
	}
}

func GetMeAPool() *MyPool {
	p := &MyPool{waiting: make([]*MyPlayer, 0, 2), queue: make(chan *MyPlayer)}
	go p.matchmaker()
	return p
}

func (p *MyPool) handleWaitForPartner(w http.ResponseWriter, r *http.Request) {
	log.Println("Someone connected to the game (direct serve attempt)")
	player := &MyPlayer{responseWriter: w, request: r, done: make(chan bool)}
	p.queue <- player

	log.Println("Player added to queue (direct serve). Waiting for a match...")

	// Wait for either a match to be found and served, or for the client to disconnect
	select {
	case <-player.done:
		log.Println("Player served /build content.")
	case <-r.Context().Done():
		log.Println("Client disconnected before a match was found (direct serve).")
		// In a more robust system, you might want to remove the player from the queue here
		// if the matchmaker hasn't picked them up yet.
	case <-time.After(30 * time.Second): // Optional timeout
		log.Println("Timeout waiting for a partner (direct serve).")
		http.Error(w, "Timeout waiting for a partner", http.StatusRequestTimeout)
		// In a more robust system, you might want to remove the player from the queue here.
	}
}

*/

func main() {
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Handle("/static/*", http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))

	//fs := http.FileServer(http.Dir("/Users/caiobahlis/GolandProjects/MyInterpreter/Chess2/chess/build"))
	fs := http.FileServer(http.Dir("./chess/build"))

	r.Handle("/build/*", http.StripPrefix("/build/", fs))

	//r.Handle("/build/pieces/*", http.StripPrefix("/build/pieces/", http.FileServer(http.Dir("/Users/caiobahlis/GolandProjects/MyInterpreter/Chess2/chess/build/pieces"))))
	r.Handle("/build/pieces/*", http.StripPrefix("/build/pieces/", http.FileServer(http.Dir("./chess/build/pieces"))))

	r.NotFound(func(w http.ResponseWriter, r *http.Request) {
		if strings.HasPrefix(r.URL.Path, "/build") {
			//http.ServeFile(w, r, "/Users/caiobahlis/GolandProjects/MyInterpreter/Chess2/chess/build/index.html")
			http.ServeFile(w, r, "./chess/build/index.html")
			return
		}
		http.NotFound(w, r)
	})

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./static/Home_Page/Home.html")
	})

	r.Get("/Chessv2", func(w http.ResponseWriter, r *http.Request) {
		http.Redirect(w, r, "/build/", http.StatusFound)
	})

	log.Println("Starting server on :8080")
	http.ListenAndServe(":8080", r)
}
