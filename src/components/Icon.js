import React from 'react'

const styles = {
  svg: {
    display: 'inline-block',
    verticalAlign: 'middle',
  }
}

export const IconTypes = {
  PAUSE: ["M128 128h320v768h-320zM576 128h320v768h-320z"],
  PLAY: ["M192 128l640 384-640 384z"],
  STOP: ["M128 128h768v768h-768z"],
  MENU: ["M64 192h896v192h-896zM64 448h896v192h-896zM64 704h896v192h-896z"],
  MUTE: ["M960 619.148v84.852h-84.852l-107.148-107.148-107.148 107.148h-84.852v-84.852l107.148-107.148-107.148-107.148v-84.852h84.852l107.148 107.148 107.148-107.148h84.852v84.852l-107.148 107.148 107.148 107.148z",
        "M416.006 960c-8.328 0-16.512-3.25-22.634-9.374l-246.626-246.626h-114.746c-17.672 0-32-14.326-32-32v-320c0-17.672 14.328-32 32-32h114.746l246.626-246.628c9.154-9.154 22.916-11.89 34.874-6.936 11.958 4.952 19.754 16.622 19.754 29.564v832c0 12.944-7.796 24.612-19.754 29.564-3.958 1.64-8.118 2.436-12.24 2.436z"],
  EXPAND: [
        "M1024 0h-416l160 160-192 192 96 96 192-192 160 160z",
        "M1024 1024v-416l-160 160-192-192-96 96 192 192-160 160z",
        "M0 1024h416l-160-160 192-192-96-96-192 192-160-160z",
        "M0 0v416l160-160 192 192 96-96-192-192 160-160z"
      ],
}

export const Icon = ({size, icon, color}) => (
  <svg
    style={styles.svg}
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 1024 1024">
    {icon.map((path, index) => (
      <path style={{fill: color}} d={path} key={index} />
    ))}
  </svg>
)

Icon.defaultProps = {
  color: '#222',
  size: 16,
}

export default Icon
