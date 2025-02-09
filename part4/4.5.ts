// ToyFactory 네임스페이스 선언
namespace ToyFactory {
  // ToyBase 타입 선언: 모든 장난감의 기본 속성 정의
  type ToyBase = {
    name: string; // 장난감 이름
    description: string; // 장난감 설명
    minimumAge: number; // 최소 연령
  };

  // BoardGame 타입 선언: ToyBase를 확장하여 보드게임 속성 추가
  type BoardGame = ToyBase & {
    kind: "boardgame"; // 장난감 종류: 보드게임
    players: number; // 플레이어 수
  };

  // Puzzle 타입 선언: ToyBase를 확장하여 퍼즐 속성 추가
  type Puzzle = ToyBase & {
    kind: "puzzle"; // 장난감 종류: 퍼즐
    pieces: number; // 퍼즐 조각 수
  };

  // Doll 타입 선언: ToyBase를 확장하여 인형 속성 추가
  type Doll = ToyBase & {
    kind: "doll"; // 장난감 종류: 인형
    matreial: string; // 인형 재질 (오타: material)
  };

  // Toy 타입 선언: BoardGame, Puzzle, Doll, Bricks 타입의 유니온 타입
  type Toy = BoardGame | Puzzle | Doll | Bricks;

  // GroupedToys 타입 선언: Toy의 kind 속성에 따라 장난감을 그룹화한 객체
  //   type GroupedToys = {
  //     [k in Toy["kind"]]: Toy[]; // 각 kind에 해당하는 장난감 배열
  //   };

  type GroupedToys = Group<Toy, "kind">;

  type Group<
    Collection extends Record<string, any>,
    Selector extends keyof Collection
  > = {
    [x in Collection[Selector]]: Collection[];
  };

  // Bricks 타입 선언: ToyBase를 확장하여 블록 장난감 속성 추가
  type Bricks = ToyBase & {
    kind: "bricks"; // 장난감 종류: 블록
    pieces: number; // 블록 조각 수
    brand: string; // 블록 브랜드
  };

  // 장난감을 종류별로 그룹화하는 함수
  function groupToys(toys: Toy[]) {
    // GroupedToys 객체 초기화
    const groups: GroupedToys = {
      boardgame: [], // 보드게임 그룹
      puzzle: [], // 퍼즐 그룹
      doll: [], // 인형 그룹
      bricks: [], // 블록 그룹
    };

    // 장난감 배열을 순회하며 그룹화
    for (let toy of toys) {
      groups[toy.kind].push(toy); // 각 장난감을 해당 그룹에 추가
    }

    return groups; // 그룹화된 장난감 객체 반환
  }
}
