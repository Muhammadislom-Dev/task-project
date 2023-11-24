import React, { useEffect, useRef, useState } from "react";
import { read, utils } from "xlsx";
import { BASE_URL } from "../services/api";

export default function SheetJSReactHTML() {
  const [__html, setHtml] = useState("");
  const tbl = useRef(null);

  useEffect(() => {
    (async () => {
      const f = await (
        await fetch(`${BASE_URL}/uploads/pi_5a49495855.xlsx`)
      ).arrayBuffer();
      const wb = read(f);
      const ws = wb.Sheets[wb.SheetNames[0]];
      const data = utils.sheet_to_html(ws);

      setHtml(data);
    })();
  }, []);

  return (
    <>
      <div ref={tbl} dangerouslySetInnerHTML={{ __html }} />
    </>
  );
}
