export class Sport {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  static createMockedSports() {
    return [
      new Sport(
        "Cycling",
        "Cycling, also called bicycling or biking, is the use of bicycles for transport, recreation, exercise or sport. People engaged in cycling are referred to as \"cyclists\", \"bicyclists\", or \"bikers\". Apart from two-wheeled bicycles, \"cycling\" also includes the riding of unicycles, tricycles, quadricycles, recumbent and similar human-powered vehicles (HPVs)."
      ),
      new Sport(
        "Volleyball",
        "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules."
      ),

      new Sport(
        "Basketball",
        "Basketball is a team sport where two teams, usually of five players each, oppose each other on a rectangular court with the primary objective of shooting a basketball through the defender's hoop while preventing the opposing team from shooting through their own hoop."
      ),
      
      new Sport(
        "Football",
        "Football, also known as soccer in some countries, is a sport played between two teams of eleven players with a spherical ball. It is played by 250 million players in over 200 countries and dependencies, making it the world's most popular sport."
      ),
      
      new Sport(
        "Tennis",
        "Tennis is a racket sport that can be played individually against a single opponent (singles) or between two teams of two players each (doubles). Each player uses a tennis racket that is strung to strike a hollow rubber ball covered with felt over or around a net and into the opponent's court."
      ),
      
      new Sport(
        "Cricket",
        "Cricket is a bat-and-ball game played between two teams of eleven players on a field at the center of which is a 22-yard (20-metre) pitch with a wicket at each end, each comprising two bails balanced on three stumps."
      ),
      
      new Sport(
        "Swimming",
        "Swimming is an individual or team racing sport that requires the use of one's entire body to move through water. The sport takes place in pools or open water (e.g., in a sea or lake)."
      ),
      
      new Sport(
        "Golf",
        "Golf is a club-and-ball sport in which players use various clubs to hit balls into a series of holes on a course in as few strokes as possible. Unlike most ball games, golf does not require a standardized playing area."
      ),
      
      new Sport(
        "Rugby",
        "Rugby football is a sport that involves two teams of fifteen players each who carry, pass, kick, and ground a ball to score points, the most common way being by touching it down in the opponent's in-goal area or kicking it through the opponent's goal posts."
      ),
    ];
  }
}