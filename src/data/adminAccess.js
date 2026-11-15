export const ADMIN_UID = "DsKyUsPOLwWPS6drbm70n7pI83z1";

export function isAdminUser(user) {
  return Boolean(user && user.uid === ADMIN_UID);
}
