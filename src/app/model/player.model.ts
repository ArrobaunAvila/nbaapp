import { Team } from "./team.model"

export interface Player{
      "id": number,
      "first_name": string,
      "height_feet"?: string,
      "height_inches"?: string,
      "last_name": string,
      "position": string,
      "team": Team
      "weight_pounds"?: string
}
