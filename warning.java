DevicePolicyManager mDevicePolicyManager = (DevicePolicyManager) getSystemService(Context.DEVICE_POLICY_SERVICE);
ComponentName mAdminComponent = new ComponentName(this, MyAdminReceiver.class);

if (!mDevicePolicyManager.isAdminActive(mAdminComponent)) {
    Intent intent = new Intent(DevicePolicyManager.ACTION_ADD_DEVICE_ADMIN);
    intent.putExtra(DevicePolicyManager.EXTRA_DEVICE_ADMIN, mAdminComponent);
    startActivityForResult(intent, REQUEST_CODE_ENABLE_ADMIN);
}
