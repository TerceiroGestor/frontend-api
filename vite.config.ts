import { defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import 'dotenv/config';

export default ({ mode }) => {

  return defineConfig({
      plugins: [react()],

      server: {
          port: parseInt(process.env.PORT),
      },
  });
}