interface CustomerInfo {
  createdat?: Date;
  customer_id?: string;
  deletedat?: Date;
  email?: string;
  id?: string;
  name?: string;
  password?: string;
  phone?: string;
  updatedAt?: Date;
  userStatus?: string;
  userType?: string;
  userImage?: string;
  cycle?: string;
  package_name?: string;
  price?: string;
  validity?: string;
  is_subscribed?: boolean;
}

export default CustomerInfo;
