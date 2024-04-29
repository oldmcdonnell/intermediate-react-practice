export const GetTeamMembers = async () => {
    return [
      {
        playerName: "qwicky",
        playerAttack: 3,
        playerHealth: 2,
        playerSpeed: 5,
      },
      {
        playerName: "slow",
        playerAttack: 2,
        playerHealth: 7,
        playerSpeed: 1,
      },
      {
        playerName: "angry",
        playerAttack: 8,
        playerHealth: 1,
        playerSpeed: 1,
      },
      {
        playerName: "qwicky",
        playerAttack: 3,
        playerHealth: 2,
        playerSpeed: 5,
      },
    ];
  };
  
  export const createComment = async (text, parentId = null) => {
    return {

    };
  };
  
  export const updateTeamMember = async (text) => {
    return { text };
  };
  
  export const deleteTeamMember = async () => {
    return {};
  };
  