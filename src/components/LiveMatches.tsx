import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Match {
  id: string;
  team1: string;
  team2: string;
  score1: number;
  score2: number;
  status: "live" | "finished" | "upcoming";
  sport: string;
  flag1: string;
  flag2: string;
}

// Mock data - replace with actual API
const mockMatches: Match[] = [
  {
    id: "1",
    team1: "England",
    team2: "Australia", 
    score1: 154,
    score2: 149,
    status: "live",
    sport: "Cricket",
    flag1: "🏴󐁧󐁢󐁥󐁮󐁧󐁿",
    flag2: "🇦🇺"
  },
  {
    id: "2",
    team1: "FCB",
    team2: "RMA",
    score1: 0,
    score2: 3,
    status: "finished",
    sport: "Football",
    flag1: "🔵",
    flag2: "⚪"
  },
  {
    id: "3",
    team1: "Federer",
    team2: "Nadal",
    score1: 0,
    score2: 1,
    status: "live",
    sport: "Tennis",
    flag1: "🇨🇭",
    flag2: "🇪🇸"
  }
];

export const LiveMatches = () => {
  return (
    <div className="bg-card rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground">Live Matches</h3>
        <Badge variant="secondary" className="bg-live/10 text-live border-live/20">
          ● Live
        </Badge>
      </div>
      
      <div className="space-y-3">
        {mockMatches.map((match) => (
          <div key={match.id} className="border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground font-medium">{match.sport}</span>
              <Badge 
                variant={match.status === "live" ? "default" : "secondary"}
                className={match.status === "live" ? "bg-live text-white" : ""}
              >
                {match.status}
              </Badge>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{match.flag1}</span>
                  <span className="font-medium text-sm">{match.team1}</span>
                </div>
                <span className="font-bold text-accent">{match.score1}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{match.flag2}</span>
                  <span className="font-medium text-sm">{match.team2}</span>
                </div>
                <span className="font-bold text-accent">{match.score2}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Button variant="outline" className="w-full mt-4 text-accent border-accent hover:bg-accent hover:text-accent-foreground">
        More
      </Button>
    </div>
  );
};