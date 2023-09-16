import { userService } from '../userService';

export function useUserGetById(id: number) {
  function getUser() {
    return userService.getUser(id);
  }

  return { getUser };
}
