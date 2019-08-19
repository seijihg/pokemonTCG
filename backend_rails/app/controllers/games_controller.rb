class GamesController < ApplicationController

    def index
        games=Game.all
        render json: games, only: [:id, :player_name, :score]
    end 

    def create
        game= Game.create game_params 
        render json: game 
    end 
    
    
    private 

    def game_params
        params.require(:game).permit(:player_name, :score)
    end 


end
