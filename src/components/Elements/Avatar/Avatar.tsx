import Image, { type ImageProps } from "next/image";
import { type FC } from "react";

export type AvatarProps = Omit<ImageProps, "alt" | "src"> & {
  src?: string;
};
export const Avatar: FC<AvatarProps> = ({ src, ...props }) => {
  return (
    <div className="avatar">
      <div className="h-12 w-12 rounded-full">
        {src !== undefined ? (
          <Image src={src} alt="avatar" {...props} width={48} height={48} />
        ) : (
          <Image
            src="/noimage_user.png"
            alt="avatar"
            {...props}
            width={48}
            height={48}
          />
        )}
      </div>
    </div>
  );
};
