export interface FighterShape {
  name: string;
  id: string;
  imageUrl: string;
  health: number;
  attack: number;
  defense: number;
  attackSpeed: number;
  attackCooldown: number;
}

export const Archer: FighterShape = {
    name: 'Archer',
    id: 'archer',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRHu1GWtewrBPjxJFvXufZJX5sIyIT98GFzg&usqp=CAU',
    health: 100,
    attack: 12,
    defense: 5,
    attackSpeed: 1,
    attackCooldown: 0
}

export const Knight: FighterShape = {
    name: 'Knight',
    id: 'knight',
    imageUrl: 'https://img.freepik.com/premium-vector/knight-warrior-armor_9645-221.jpg?w=2000',
    health: 150,
    attack: 7,
    defense: 10,
    attackSpeed: 0.5,
    attackCooldown: 0
}

export const Mage: FighterShape ={
    name: 'Mage',
    id: 'mage',
    imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b5c04e6-010b-4a27-896b-1abd5293ddc7/da833jo-4cbbe041-01f2-487d-94c1-0a5d0807023a.jpg/v1/fill/w_1024,h_1536,q_75,strp/character_concept_art__mage_by_kenji893_da833jo-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUzNiIsInBhdGgiOiJcL2ZcLzRiNWMwNGU2LTAxMGItNGEyNy04OTZiLTFhYmQ1MjkzZGRjN1wvZGE4MzNqby00Y2JiZTA0MS0wMWYyLTQ4N2QtOTRjMS0wYTVkMDgwNzAyM2EuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.WFXvrjTu5yShvlSfL76C0OmXK-Mwk1-XbEeJboRGqso',
    health: 80,
    attack: 15,
    defense: 3,
    attackSpeed: 1,
    attackCooldown: 0
}

export const fighters = [Archer, Knight, Mage];


export function getRandomFighter ():FighterShape {
    const randomOppIndex =  Math.floor(Math.random()*fighters.length);
    return fighters[randomOppIndex];
}