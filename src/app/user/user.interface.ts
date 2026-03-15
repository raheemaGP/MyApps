export interface User {
  id: number;
  name: string;
  position: string;
  department: string;
  details: { roleId: number; roleName: string };
}