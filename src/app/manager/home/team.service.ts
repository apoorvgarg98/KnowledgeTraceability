import { Team } from "../../shared/team.model";
import { EventEmitter } from "../../../../node_modules/@angular/core";

export class TeamService{

    teamChanged = new EventEmitter<Team>();

    private team : Team;
    getTeam(){
        return this.team;
    }
    setTeam(team1 : Team){
        this.team = team1;
        this.teamChanged.emit(this.team);
    }
}