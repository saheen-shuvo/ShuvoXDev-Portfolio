import { motion } from "framer-motion";
import { useRipple } from "@/hooks/useRipple";
import { cn } from "@/lib/utils";

interface RippleButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "accent";
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const RippleButton = ({
  children,
  className,
  variant = "primary",
  href,
  onClick,
}: RippleButtonProps) => {
  const { createRipple, RippleContainer } = useRipple();

  const baseStyles = "relative overflow-hidden";
  const variantStyles = {
    primary: "btn-primary",
    outline: "btn-outline",
    accent: "btn-accent",
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    createRipple(e);
    onClick?.(e);
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={handleClick}
      className={cn(baseStyles, variantStyles[variant], className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      <RippleContainer />
    </Component>
  );
};

export default RippleButton;
