import React from "/vendor/react";
import { SvgIcon } from "/vendor/@material-ui/core";

const SmallCheckIcon = React.memo((props) => {
  return (
    <SvgIcon {...props}>
      <path d="M19.48 4.85L8.75 15.58l-4.23-4.23-1.77 1.77 6 6 12.5-12.5z" />
    </SvgIcon>
  );
});
SmallCheckIcon.displayName = "SmallCheckIcon";

export default SmallCheckIcon;
