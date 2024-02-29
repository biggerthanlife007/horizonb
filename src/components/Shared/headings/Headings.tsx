import styles from "./Heading.module.scss";

export const H1: React.FC<JSX.IntrinsicElements["h1"]> = (props) => {
  return (
    <h1 {...props} className={`${styles.H1} ${props.className}`}>
      {props.children}
    </h1>
  );
};

export const H2: React.FC<JSX.IntrinsicElements["h2"]> = (props) => {
  return (
    <h2 {...props} className={`${styles.H2} ${props.className}`}>
      {props.children}
    </h2>
  );
};

export const H3: React.FC<JSX.IntrinsicElements["h3"]> = (props) => {
  return (
    <h3 {...props} className={`${styles.H3} ${props.className}`}>
      {props.children}
    </h3>
  );
};

export const H4: React.FC<JSX.IntrinsicElements["h4"]> = (props) => {
  return (
    <h4 {...props} className={`${styles.H4}  ${props.className}`}>
      {props.children}
    </h4>
  );
};

export const H5: React.FC<JSX.IntrinsicElements["h5"]> = (props) => {
  return (
    <h5 {...props} className={`${styles.H5} ${props.className}`}>
      {props.children}
    </h5>
  );
};

export const H6: React.FC<JSX.IntrinsicElements["h6"]> = (props) => {
  return (
    <h6 {...props} className={`${styles.H6} ${props.className}`}>
      {props.children}
    </h6>
  );
};

export const P: React.FC<JSX.IntrinsicElements["p"]> = (props) => {
  return (
    <p {...props} className={`${styles.P} ${props.className}`}>
      {props.children}
    </p>
  );
};

export const P2: React.FC<JSX.IntrinsicElements["p"]> = (props) => {
  return (
    <p {...props} className={`${styles.P2} ${props.className}`}>
      {props.children}
    </p>
  );
};

export const Small: React.FC<JSX.IntrinsicElements["h1"]> = (props) => {
  return (
    <p {...props} className={`${styles.Small} ${props.className}`}>
      {props.children}
    </p>
  );
};

export const Large: React.FC<JSX.IntrinsicElements["h1"]> = (props) => {
  return (
    <p {...props} className={`${styles.Large} ${props.className}`}>
      {props.children}
    </p>
  );
};
