FROM golang:1.20 AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
ENV CGO_ENABLED=0
RUN go build -o app main.go

FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/app .
COPY --from=builder /app/build ./chess/build
COPY --from=builder /app/static ./static
EXPOSE 8080
CMD ["./app"]
