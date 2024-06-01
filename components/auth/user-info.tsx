import React from 'react';
import { ExtendedUser } from '@/next-auth';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface UserInfoProps {
  user?: ExtendedUser;
  label?: string;
}

const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className='w-[600px] shadow-md'>
      <CardHeader>
        <p>{label}</p>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='flex flex-row justify-between rounded-lg border p-3 shadow-sm'>
          <p className='text-sm font-medium'>ID</p>
          <p className='max-w-[180px] truncate rounded-md bg-slate-100 p-1 font-mono text-xs'>
            {user?.id}
          </p>
        </div>
        <div className='flex flex-row justify-between rounded-lg border p-3 shadow-sm'>
          <p className='text-sm font-medium'>Name</p>
          <p className='max-w-[180px] truncate rounded-md bg-slate-100 p-1 font-mono text-xs'>
            {user?.name}
          </p>
        </div>
        <div className='flex flex-row justify-between rounded-lg border p-3 shadow-sm'>
          <p className='text-sm font-medium'>E-Mail</p>
          <p className='max-w-[180px] truncate rounded-md bg-slate-100 p-1 font-mono text-xs'>
            {user?.email}
          </p>
        </div>
        <div className='flex flex-row justify-between rounded-lg border p-3 shadow-sm'>
          <p className='text-sm font-medium'>Role</p>
          <p className='max-w-[180px] truncate rounded-md bg-slate-100 p-1 font-mono text-xs'>
            {user?.role}
          </p>
        </div>
        <div className='flex flex-row justify-between rounded-lg border p-3 shadow-sm'>
          <p className='text-sm font-medium'>Two Factor Authentication</p>
          <Badge variant={user?.isTwoFactorEnabled ? 'success' : 'destructive'}>
            {user?.isTwoFactorEnabled ? 'Enabled' : 'Disabled'}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserInfo;
