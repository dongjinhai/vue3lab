declare namespace Chat {
  interface Good {
    id: number;
    friendId: number;
    name: string;
  }
  interface Friend {
    id: number;
    historyId: number;
    name: string;
  }
  
  interface History {
    id: string;
    name: string;
  }
}